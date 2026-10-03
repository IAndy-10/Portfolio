"use client";

import Link from "next/link";
import { dataPortfolio_Engineer, dataPortfolio_Artist, dataPortfolio_Maker } from "@/data";

export default function SidebarProjects() {
  return (
    <aside className="hidden md:block w-64 p-4 border-r border-border h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Projects</h2>

      {/* Sound & Interaction */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Sound & Interaction</h3>
        <ul className="space-y-1">
          {[1, 8, 6, 2, 5, 4, 7].map(id => dataPortfolio_Artist.find(p => p.id === id)).filter((p): p is typeof dataPortfolio_Artist[0] => !!p).map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects/${project.slug}`}
                className="text-secondary hover:text-foreground transition-colors"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Data & Science */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Data & Science</h3>
        <ul className="space-y-1">
          {dataPortfolio_Engineer.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects/${project.slug}`}
                className="text-secondary hover:text-foreground transition-colors"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Embedded & Fabrication */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Embedded & Fabrication</h3>
        <ul className="space-y-1">
          {dataPortfolio_Maker.map((project) => (
            <li key={project.id}>
              <Link
                href={`/projects/${project.slug}`}
                className="text-secondary hover:text-foreground transition-colors"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
