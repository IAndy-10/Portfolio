"use client";

import Link from "next/link";
import { hexagonData as allHexagonData, dataPortfolio_Artist, dataPortfolio_Engineer, dataPortfolio_Maker } from "@/data";

const hexagonData = allHexagonData;

// Slug-based subtitle lookup
const subtitleMap: Record<string, string> = {};
dataPortfolio_Engineer.forEach((p) => {
  subtitleMap[`/projects/${p.slug}`] = p.subtitle;
});
dataPortfolio_Artist.forEach((p) => {
  subtitleMap[`/projects/${p.slug}`] = p.subtitle;
});
dataPortfolio_Maker.forEach((p) => {
  subtitleMap[`/projects/${p.slug}`] = p.subtitle;
});

export default function ProjectMobileDisplay() {
  return (
    <div className="md:hidden w-full py-10">
      {/* Section header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-foreground text-3xl font-normal">PROJECTS</h2>
        <p className="text-secondary text-base mt-1">Sound & Interaction · Data & Science</p>
      </div>

      {/* Horizontal scroll carousel */}
      <div className="overflow-x-auto pb-4 px-6 scrollbar-hide">
        <div className="flex gap-6 w-max">
          {hexagonData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex flex-col items-center w-32 flex-shrink-0"
            >
              {/* Hexagon shape */}
              <div
                className="relative group flex-shrink-0"
                style={{
                  width: "110px",
                  height: "124px",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-secondary bg-opacity-80 group-hover:bg-opacity-20 transition-all duration-300" />
                {/* Name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-foreground font-bold text-xs text-center px-2 relative z-10 leading-tight">
                    {item.name}
                  </span>
                </div>
              </div>

              {/* Brief description */}
              <p className="text-secondary text-xs mt-3 text-center leading-snug line-clamp-3 w-full">
                {subtitleMap[item.link] ?? ""}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
