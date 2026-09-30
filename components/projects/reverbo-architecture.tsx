export default function ReverboArchitecture() {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* How It Works */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-secondary mb-6">How it works</h3>
          <div className="flex flex-col items-center gap-0">
            {/* UI box */}
            <div className="border border-secondary/60 rounded-md px-6 py-3 text-sm text-primary text-center">
              Svelte UI<br />
              <span className="text-secondary text-xs">(WebView)</span>
            </div>

            {/* Arrow down + label */}
            <div className="flex flex-col items-center my-1">
              <div className="w-px h-4 border-l border-dashed border-secondary/50" />
              <span className="text-[10px] text-secondary/70 my-0.5">Message passing</span>
              <div className="w-px h-4 border-l border-dashed border-secondary/50" />
            </div>

            {/* DSP box with arrows */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-secondary/70 uppercase tracking-wider whitespace-nowrap">Audio In</span>
              <svg width="32" height="12" viewBox="0 0 32 12" className="text-secondary/50 flex-shrink-0">
                <line x1="0" y1="6" x2="26" y2="6" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
                <polygon points="26,2 32,6 26,10" fill="currentColor" />
              </svg>

              <div className="border border-secondary/60 bg-secondary/5 rounded-md px-3 py-4 text-sm text-primary text-center">
                <div className="font-medium mb-2">JUCE DSP</div>
                <ul className="text-xs text-secondary space-y-0.5 text-left list-disc list-inside">
                  <li>Input Filter</li>
                  <li>Early Reflections</li>
                  <li>FDN Reverb</li>
                  <li>Chorus</li>
                  <li>Stereo Widener</li>
                </ul>
              </div>

              <svg width="32" height="12" viewBox="0 0 32 12" className="text-secondary/50 flex-shrink-0">
                <line x1="0" y1="6" x2="26" y2="6" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
                <polygon points="26,2 32,6 26,10" fill="currentColor" />
              </svg>
              <span className="text-[10px] text-secondary/70 uppercase tracking-wider whitespace-nowrap">Audio Out</span>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-secondary mb-6">Performance</h3>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-secondary/20">
              {[
                ["Format", "VST3 / AU"],
                ["Channels", "Stereo"],
                ["Parameters", "31"],
                ["Architecture", "8-line FDN + diffusion"],
                ["UI", "Svelte 5 / WebView"],
                ["DSP", "C++17 / JUCE 8"],
                ["pluginval", "Pass (strictness 5)"],
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
