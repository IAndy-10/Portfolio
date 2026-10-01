export default function AquifuturoArchitecture() {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* How It Works */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-secondary mb-6">How it works</h3>
          <div className="flex flex-col items-center gap-0">
            {/* Input sources */}
            <div className="flex items-start gap-3">
              <div className="border border-secondary/60 rounded-md px-6 py-3 text-sm text-primary text-center">
                3D Scan<br />
                <span className="text-secondary text-xs">(Photogrammetry)</span>
              </div>
              <div className="border border-secondary/60 rounded-md px-6 py-3 text-sm text-primary text-center">
                Roots Simulation<br />
                <span className="text-secondary text-xs">(Rhizomorph)</span>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex flex-col items-center my-1">
              <div className="w-px h-4 border-l border-dashed border-secondary/50" />
              <span className="text-[10px] text-secondary/70 my-0.5">Skeleton graph</span>
              <div className="w-px h-4 border-l border-dashed border-secondary/50" />
            </div>

            {/* Two synthesis paths side by side */}
            <div className="flex items-start gap-3">
              <div className="border border-secondary/60 bg-secondary/5 rounded-md px-3 py-4 text-sm text-primary text-center">
                <div className="font-medium mb-2 text-xs">Canopy</div>
                <ul className="text-xs text-secondary space-y-0.5 text-left list-disc list-inside">
                  <li>Modal Synthesis</li>
                  <li>Mass-Spring</li>
                  <li>96 Modes</li>
                </ul>
              </div>

              <div className="border border-secondary/60 bg-secondary/5 rounded-md px-3 py-4 text-sm text-primary text-center">
                <div className="font-medium mb-2 text-xs">Roots</div>
                <ul className="text-xs text-secondary space-y-0.5 text-left list-disc list-inside">
                  <li>RAVE Decoder</li>
                  <li>Latent Space</li>
                  <li>16 Dims</li>
                </ul>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex flex-col items-center my-1">
              <div className="w-px h-4 border-l border-dashed border-secondary/50" />
            </div>

            {/* AR box */}
            <div className="border border-secondary/60 rounded-md px-6 py-3 text-sm text-primary text-center">
              Unity AR App<br />
              <span className="text-secondary text-xs">(iOS / ARKit)</span>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-secondary mb-6">Specs</h3>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-secondary/20">
              {[
                ["Platform", "iOS (ARKit)"],
                ["Engine", "Unity + AR Foundation"],
                ["Audio tracks", "9 (5 canopy + 4 roots)"],
                ["Canopy synth", "Modal (96 modes)"],
                ["Root synth", "RAVE (16-dim latent)"],
                ["Pipeline", "Python + Blender"],
                ["Sample rate", "48 kHz / 24-bit"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="py-2.5 text-secondary/70 pr-6">{label}</td>
                  <td className="py-2.5 text-primary font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
