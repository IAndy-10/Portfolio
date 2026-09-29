import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// The quad ignores the camera and covers the whole canvas.
const vertexShader = /* glsl */ `
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float t;
  uniform vec2 res;
  #define TAU 6.28318530718

  float caustic(vec2 uv, float tm) {
    vec2 p = mod(uv * TAU, TAU) - 250.0;
    vec2 i = p;
    float c = 1.0;
    float k = 0.005;
    for (int n = 0; n < 5; n++) {
      float tt = tm * (1.0 - (3.5 / float(n + 1)));
      i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
      c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / k), p.y / (cos(i.y + tt) / k)));
    }
    c /= 5.0;
    c = 1.17 - pow(c, 1.4);
    return pow(abs(c), 8.0);
  }

  void main() {
    vec2 q = gl_FragCoord.xy / res;
    vec2 uv = gl_FragCoord.xy / res.y;

    // slow oscillating swell that bends the whole pattern
    vec2 w = vec2(
      sin(uv.y * 5.0 + t * 0.3) + 0.5 * sin(uv.y * 11.0 - t * 1.3),
      cos(uv.x * 4.0 + t * 0.1) + 0.5 * cos(uv.x * 9.0 + t * 1.1)
    ) * 0.012;

    float c1 = caustic(uv * 0.8 + w, t * 0.08);
    float c2 = caustic(uv * 1.3 - w + 3.7, t * 0.05 + 10.0);
    float swell = 0.65 + 0.35 * sin(uv.x * 2.2 - t * 0.6 + sin(uv.y * 3.0 + t * 0.4) * 1.3);

    vec3 wall = mix(vec3(0.04, 0.06, 0.08), vec3(0.06, 0.08, 0.12), q.y);
    vec3 col = wall
      + vec3(0.31, 0.41, 1.00) * c1 * swell * 0.9
      + vec3(0.91, 0.88, 0.79) * c2 * swell * 0.25
      + vec3(0.40, 0.50, 0.85) * c1 * c1 * 0.45;

    col *= 0.55 + 0.45 * smoothstep(1.1, 0.15, length(q - 0.5) * 1.4);
    col = col / (1.0 + col * 0.5);
    gl_FragColor = vec4(col, 1.0);
  }
`;

function Caustics({ reduceMotion }: { reduceMotion: boolean }) {
  const size = useRef(new THREE.Vector2());

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        depthTest: false,
        depthWrite: false,
        uniforms: {
          t: { value: 6 },
          res: { value: new THREE.Vector2(1, 1) },
        },
      }),
    []
  );

  useEffect(() => () => material.dispose(), [material]);

  useFrame((state) => {
    state.gl.getDrawingBufferSize(size.current);
    material.uniforms.res.value.copy(size.current);
    material.uniforms.t.value = reduceMotion ? 6 : state.clock.elapsedTime + 6;
  });

  return (
    <mesh material={material} frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}

export default function WaterWall({ className = "" }: { className?: string }) {
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
      aria-label="Animated light reflections from water moving across a wall"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false }}
        frameloop={visible && !reduceMotion ? "always" : "demand"}
      >
        <Caustics reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}
