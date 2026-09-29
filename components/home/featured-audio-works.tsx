"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { dataPortfolio_Artist } from "@/data";

const FEATURED_SLUGS = ["posttalk", "reverbo", "perkung-fu", "neochucao"];

const featuredProjects = FEATURED_SLUGS.map(
    (slug) => dataPortfolio_Artist.find((p) => p.slug === slug)!
);

function VideoModal({
    src,
    onClose,
}: {
    src: string;
    onClose: () => void;
}) {
    const isYoutube = src.includes("youtube") || src.includes("youtu.be");

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-[90vw] max-w-4xl aspect-video rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-background/70 text-foreground hover:bg-background transition-colors"
                >
                    X
                </button>
                {isYoutube ? (
                    <iframe
                        src={src}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <video
                        src={src}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                    />
                )}
            </div>
        </div>
    );
}

export default function FeaturedAudioWorks() {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    return (
        <section className="w-full py-24 px-6">
            <div className="flex items-baseline justify-between max-w-6xl mx-auto mb-20">
                <h2 className="text-foreground text-4xl font-light">
                    Audio & Interactive
                </h2>
                <p className="text-secondary text-lg font-light hidden md:block">
                    DSP engines, neural synthesis, gesture-driven instruments
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                {featuredProjects.map((project, index) => {
                    const videoFile =
                        (project as any).video ||
                        (project as any).video_url ||
                        null;
                    const num = String(index + 1).padStart(2, "0");

                    return (
                        <div
                            key={project.slug}
                            className="group cursor-pointer"
                            onClick={() =>
                                videoFile
                                    ? setVideoSrc(videoFile)
                                    : (window.location.href = `/projects/${project.slug}`)
                            }
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden mb-6">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-foreground/80 group-hover:bg-foreground/20 transition-all duration-500" />
                            </div>

                            {/* Number */}
                            <span className="text-secondary/50 text-xs font-mono tracking-widest">
                                {num}
                            </span>

                            {/* Title */}
                            <h3 className="text-foreground text-2xl font-normal mt-1.5 mb-3">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-secondary text-sm font-light leading-relaxed mb-4 line-clamp-3">
                                {project.subtitle}
                            </p>

                            {/* Technologies */}
                            <p className="text-secondary/60 text-xs tracking-wide mb-5">
                                {project.tools.join(" · ")}
                            </p>

                            {/* Actions */}
                            <div className="flex items-center gap-6">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="text-sm text-secondary hover:text-foreground transition-colors duration-300"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Explore project{" "}
                                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                                        &rarr;
                                    </span>
                                </Link>
                                {videoFile && (
                                    <span className="text-sm text-secondary/50 hover:text-secondary transition-colors duration-300">
                                        Watch demo
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Video Modal */}
            {videoSrc && (
                <VideoModal
                    src={videoSrc}
                    onClose={() => setVideoSrc(null)}
                />
            )}
        </section>
    );
}
