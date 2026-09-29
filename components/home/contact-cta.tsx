"use client";

import { Mail, Github, Linkedin, Download } from "lucide-react";
import dynamic from "next/dynamic";

const WaterWall = dynamic(() => import("./WaterWall"), { ssr: false });

const links = [
    {
        icon: Mail,
        label: "italoandresrd@gmail.com",
        href: "mailto:italoandresrd@gmail.com",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/IAndy-10?tab=repositories",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/italo-rojas-b20269b1/",
    },
    {
        icon: Download,
        label: "Resume",
        href: "/Italo Rojas - Resume1.pdf",
    },
];

export default function ContactCta() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* WaterWall background */}
            <div className="absolute inset-0 opacity-40">
                <WaterWall />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 py-20">
                <p className="text-secondary/70 text-xs tracking-[0.25em] uppercase mb-4">
                    Let&apos;s build something together
                </p>
                <h2 className="text-foreground text-2xl md:text-4xl font-light leading-snug max-w-2xl mb-10">
                    Interested in audio software,<br />
                    creative technology, or neural synthesis?
                </h2>

                <div className="flex flex-wrap items-center gap-8">
                    {links.map(({ icon: Icon, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "_blank"}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-2.5 text-foreground/80 hover:text-foreground transition-colors duration-300"
                        >
                            <Icon size={18} strokeWidth={1.5} />
                            <span className="text-sm">{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
