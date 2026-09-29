import { notFound } from "next/navigation";
import { dataPortfolio_Artist, dataPortfolio_Engineer } from "@/data";
import TransitionPage from "@/components/ui/transition-page";
import ContainerPage from "@/components/ui/container-page";
import Banner from "@/components/ui/banner";
import SidebarProjects from "@/components/projects/sidebar-projects";
import ProjectMobileDisplay from "@/components/projects/project-mobile-display";
import Image from "next/image";
import YoTerraPoem from "@/components/projects/yoterra-poem";

const allProjects = [...dataPortfolio_Artist, ...dataPortfolio_Engineer];

function findProject(slug: string) {
  return allProjects.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const contextLabel =
    slug === "perkung-fu" || slug === "neochucao" || slug === "aquifuturo" || slug === "dance-of-laplace"
      ? "Concept"
      : "Context";

  const hasLearnings = project.learnings && project.learnings.length > 0;
  const hasSiteUrl = "siteUrl" in project && project.siteUrl;
  const hasVideo = "video" in project && project.video;
  const hasVideoUrl = "video_url" in project && project.video_url;
  const hasIterations = "iterations" in project && project.iterations && (project.iterations as any[]).length > 0;

  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <div className="flex gap-8">
          <SidebarProjects />
          <div className="flex flex-col justify-center h-full p-4 md:px-6 md:py-10">
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">

              {/* Header */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-secondary text-sm uppercase tracking-widest">{project.category} — {project.tags.join(" · ")}</p>
                  {project.repository && (
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 ml-4 text-xs border border-secondary/50 text-secondary px-3 py-1.5 rounded-full hover:bg-secondary/10 transition-colors">
                      ↗ Repository
                    </a>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-primary mb-3">{project.title}</h1>
                <p className="text-secondary text-xl">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs border border-secondary text-secondary px-3 py-1 rounded-full">{tool}</span>
                  ))}
                </div>
                {project.status === "in-development" && (
                  <div className="mt-5 inline-flex items-center gap-2 border border-secondary bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse inline-block" />
                    Work in progress
                  </div>
                )}
              </div>

              {/* === PostTalk: First Iteration video === */}
              {slug === "posttalk" && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">First Iteration</h2>
                  <div className="w-full aspect-video rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/jO9crDHlqVA"
                      title="PostTalk — first iteration"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-secondary text-sm leading-relaxed text-justify">
                    This version was used in the MAT EoY 2026. The system is functional at the DSP level — the reverb engine runs in C++/JUCE with 56 parameters — and gesture recognition via MediaPipe is integrated in the Webview layer.
                  </p>
                </section>
              )}

              {/* === AquiFuturo: Video preview === */}
              {slug === "aquifuturo" && hasVideo && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Preview</h2>
                  <div className="w-full overflow-hidden rounded-lg bg-surface-alt">
                    <video controls className="w-full" style={{ maxHeight: "520px" }}>
                      <source src={(project as any).video} type="video/quicktime" />
                      <source src={(project as any).video} type="video/mp4" />
                      Your browser does not support the video element.
                    </video>
                  </div>
                </section>
              )}

              {/* === Perkung-fu: YouTube video === */}
              {slug === "perkung-fu" && (
                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HDvQbkjqt-I"
                    title="Perkung-fu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* === NeoChucao: Sound Examples === */}
              {slug === "neochucao" && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Sound Examples</h2>
                  <h4 className="text-sm font-semibold text-primary">Claude Collider MCP + Rave example</h4>
                  <audio controls className="w-full">
                    <source src="/claude-collider-rave-mcp.wav" type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="w-full aspect-video rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/uRod_opk1PA"
                      title="Claude Collider MCP + Rave"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-primary">Rave Midi example</h4>
                  <audio controls className="w-full">
                    <source src="/rave-midi-example.wav" type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                  {/* Images */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.images.map((img, i) => (
                      <div key={i} className="w-full h-64 relative overflow-hidden rounded-lg bg-surface-alt">
                        <Image src={img} alt={`${project.title} ${i + 1}`} fill quality={95} className="object-cover" />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* === Standard Images (skip for neochucao which handles its own, aquifuturo which has no images, reverbo which has single image) === */}
              {slug === "reverbo" && project.images.length > 0 && (
                <>
                  <div className="w-full h-64 relative overflow-hidden rounded-lg bg-surface-alt">
                    <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
                  </div>
                  {(project as any).video_url && (
                    <div className="w-full aspect-video overflow-hidden rounded-lg bg-background">
                      <iframe
                        src={(project as any).video_url}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </>
              )}

              {slug === "yoterra" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full h-64 relative overflow-hidden rounded-lg bg-surface-alt">
                    <Image src="/fungamorpho1.png" alt="Funga Morpho 1" fill className="object-cover" />
                  </div>
                  <div className="w-full h-64 relative overflow-hidden rounded-lg bg-surface-alt">
                    <Image src="/fungamorpho2.png" alt="Funga Morpho 2" fill className="object-cover" />
                  </div>
                </div>
              )}

              {slug === "dance-of-laplace" && project.images.length > 0 && (
                <section className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((src, i) => (
                      <img key={i} src={src} alt={`${project.title} ${i + 1}`} className="w-full object-cover rounded-md" />
                    ))}
                  </div>
                </section>
              )}

              {/* Standard image grid for engineer projects and posttalk */}
              {(slug === "a-fish-story") && project.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.map((img, i) => (
                    <div key={i} className="w-full h-64 relative overflow-hidden rounded-lg bg-surface-alt">
                      <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {(slug === "sustainability-strategy" || slug === "vestaesg") && project.images.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {project.images.map((img, i) => (
                    <div key={i} className="w-full h-48 relative overflow-hidden rounded-lg bg-surface-alt">
                      <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {/* === Dance of Laplace: video embeds === */}
              {slug === "dance-of-laplace" && (
                <>
                  {hasVideoUrl && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-semibold text-primary">Video</h2>
                      <div className="aspect-video w-full">
                        <iframe
                          src={(project as any).video_url}
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-md"
                        />
                      </div>
                    </section>
                  )}
                  <section className="space-y-4">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/3L7j6RN6aeg"
                        title="Dance of Laplace"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-md"
                      />
                    </div>
                  </section>
                </>
              )}

              {/* Narrative */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">{contextLabel}</h2>
                {project.narrative.split("\n\n").map((para, i) => (
                  <p key={i} className="text-secondary leading-relaxed text-justify">{para}</p>
                ))}
                {slug === "posttalk" && (
                  <p className="text-secondary leading-relaxed text-justify">
                    A key inspiration for this direction is the work of{" "}
                    <a href="https://roli.com/us" target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:opacity-75 transition-opacity">ROLI</a>
                    {" "}— their instruments reimagine the relationship between the performer&apos;s body and sound in ways that have shaped how I think about expressive control.
                  </p>
                )}
              </section>

              {/* Technical Detail */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Technical Detail</h2>
                <ul className="space-y-3">
                  {project.technicalDetail.map((item, i) => (
                    <li key={i} className="flex gap-3 text-secondary leading-relaxed text-justify">
                      <span className="text-secondary mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Iterations (NeoChucao) */}
              {hasIterations && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Iteration process</h2>
                  <ul className="space-y-3">
                    {((project as any).iterations as { title: string; description: string }[]).map((item, i) => (
                      <li key={i} className="flex gap-3 text-secondary leading-relaxed text-justify">
                        <span className="text-secondary mt-1">—</span>
                        <span>{item.title}: {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Learnings */}
              {hasLearnings && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Learnings</h2>
                  <ul className="space-y-3">
                    {project.learnings.map((item, i) => (
                      <li key={i} className="flex gap-3 text-secondary leading-relaxed text-justify">
                        <span className="text-secondary mt-1">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* YoTerra: Audio + Poem */}
              {slug === "yoterra" && <YoTerraPoem />}

              {/* Visit Site (A Fish Story) */}
              {hasSiteUrl && (
                <div className="pt-4">
                  <a
                    href={(project as any).siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-secondary text-secondary px-6 py-2 text-sm uppercase tracking-widest hover:bg-secondary hover:text-background transition-colors"
                  >
                    Visit Site
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>
      </ContainerPage>
      <ProjectMobileDisplay />
      <Banner />
    </>
  );
}
