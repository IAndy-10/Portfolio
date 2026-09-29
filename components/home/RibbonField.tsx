"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NU = 340; // samples along each ribbon
const NV = 90; // samples across each ribbon
const RIBBONS = 3;

const vertexShader = /* glsl */ `
  uniform float t;
  uniform float size;
  uniform float dpr;
  varying vec3 col;

  void main() {
    // position.xyz carries (u, v, ribbon id), not a real position
    float u = position.x, v = position.y, id = position.z;
    float s = u * 2.0 - 1.0;
    float ph = id * 2.1;

    vec3 C = vec3(
      s * 2.6,
      0.75 * sin(s * 2.4 + ph + t * 0.35) + (id - 1.0) * 0.35,
      0.8 * cos(s * 1.9 + ph * 1.3 + t * 0.25)
    );
    float tw = s * 2.2 + id * 1.9 + t * 0.22;
    vec3 W = vec3(0.25 * sin(s * 3.0 + t * 0.3), cos(tw), sin(tw));
    float wd = 0.75 + 0.35 * sin(s * 2.0 + ph);
    vec3 P = C + (v - 0.5) * wd * W;
    P.z += 0.03 * sin(v * 90.0 + s * 6.0); // contour-line texture

    vec4 mv = modelViewMatrix * vec4(P, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = size * dpr * (5.0 / -mv.z);

    float face = 0.35 + 0.65 * abs(sin(tw));
    float edge = smoothstep(0.0, 0.08, u) * smoothstep(1.0, 0.92, u)
               * smoothstep(0.0, 0.06, v) * smoothstep(1.0, 0.94, v);
    float sweep = exp(-pow((fract(u - t * 0.05 - id * 0.31) - 0.5) * 5.0, 2.0));
    float rows = 0.55 + 0.45 * pow(abs(sin(v * 3.14159 * 22.0)), 3.0);
    float orange = smoothstep(0.5, 0.95, 0.5 + 0.5 * sin(s * 3.2 + id * 2.0 + t * 0.3 + v * 2.0));

    vec3 blue = vec3(0.22, 0.38, 1.0);
    vec3 amber = vec3(1.0, 0.58, 0.22);
    vec3 c = mix(blue, amber, orange * 0.85);
    c = mix(c, vec3(0.85, 0.93, 1.0), sweep * 0.7);
    col = c * (0.3 + face * rows + sweep * 1.4) * edge;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 col;
  void main() {
    float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5));
    gl_FragColor = vec4(col * a, a * 0.75);
  }
`;

function Ribbons({ reduceMotion }: { reduceMotion: boolean }) {
  const points = useRef<THREE.Points>(null);
  const smooth = useRef({ x: 0, y: 0 });
  const dpr = useThree((s) => s.viewport.dpr);

  const geometry = useMemo(() => {
    const data = new Float32Array(NU * NV * RIBBONS * 3);
    let k = 0;
    for (let r = 0; r < RIBBONS; r++)
      for (let i = 0; i < NU; i++)
        for (let j = 0; j < NV; j++) {
          data[k++] = i / (NU - 1);
          data[k++] = j / (NV - 1);
          data[k++] = r;
        }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(data, 3));
    return g;
  }, []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          t: { value: reduceMotion ? 4 : 0 },
          size: { value: 2.4 },
          dpr: { value: 1 },
        },
      }),
    [reduceMotion]
  );

  useEffect(() => {
    material.uniforms.dpr.value = dpr;
  }, [dpr, material]);

  // Free GPU memory on unmount
  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material]
  );

  useFrame((state) => {
    const p = points.current;
    if (!p) return;
    const t = reduceMotion ? 4 : state.clock.elapsedTime;
    material.uniforms.t.value = t;

    // ease toward the pointer for a soft parallax
    smooth.current.x += (state.pointer.x * 0.5 - smooth.current.x) * 0.04;
    smooth.current.y += (-state.pointer.y * 0.5 - smooth.current.y) * 0.04;
    p.rotation.y = -0.35 + smooth.current.x * 0.9 + Math.sin(t * 0.1) * 0.15;
    p.rotation.x = 0.15 + smooth.current.y * 0.5;
  });

  return (
    <points
      ref={points}
      geometry={geometry}
      material={material}
      frustumCulled={false}
    />
  );
}

export default function RibbonField({ className = "" }: { className?: string }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = wrapper.current;
    if (!el) return;
    // pause rendering while scrolled offscreen
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapper}
      className={`relative h-full w-full bg-[#04060f] ${className}`}
      role="img"
      aria-label="Animated luminous ribbons made of particles"
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 53 }}
        gl={{ antialias: false, alpha: false }}
        frameloop={visible && !reduceMotion ? "always" : "demand"}
        onCreated={({ gl }) => gl.setClearColor("#04060f")}
      >
        <Ribbons reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}
