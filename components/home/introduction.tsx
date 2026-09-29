import Image from "next/image";
import SliderServices from "@/components/home/slider-services";
import PanelServices from "./panel-services";
import Link from "next/link";
import ProjectMobileDisplay from "@/components/projects/project-mobile-display";
import FeaturedAudioWorks from "@/components/home/featured-audio-works";
import ContactCta from "@/components/home/contact-cta";
import dynamic from "next/dynamic";

const RibbonField = dynamic(() => import("./RibbonField"), { ssr: false });
const WaterWall = dynamic(() => import("./WaterWall"), { ssr: false });

const Introduction = () => {
    return (
        <div className=" z-20 w-full">
            {/* Introduction Section */}
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="z-20 grid items-center h-full p-6 md:py-0 md:grid-cols-2 gap-6">
                    <div className="flex flex-col justify-start items-start max-w-md mx-auto text-left">
                        <h1 className="text-foreground mb-5 text-xl leading-tight md:text-4xl md:mb-10 font-normal">
                            Welcome, I'm Italo Rojas
                        </h1>
                        <p className="text-secondary text-xl ">
                         I build systems and experiences at the intersection of environmental data, sound, and interactive media                        
                         </p>
                    </div>
                    <div className="hidden md:block relative justify-center items-center w-full h-[250px] max-w-screen-lg mx-auto mt-1 md:mt-10 group overflow-hidden rounded-[200px]">
                        <WaterWall />
                    </div>
                </div>
            </div>

            {/* Featured Audio Works */}
            <FeaturedAudioWorks />

            {/* More Projects link */}
            <div className="flex justify-center py-16">
                <Link
                    href="/projects"
                    className="text-secondary hover:text-foreground text-lg font-light tracking-wide transition-colors duration-300"
                >
                    More projects <span className="inline-block hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </Link>
            </div>

            {/* Mobile: horizontal carousel */}
            <ProjectMobileDisplay />

            {/* About Me Section */}
            <div className="w-full py-24">
                <div className="text-center">
                    <h2 className="text-4xl font-normal text-foreground">About Me</h2>
                    <div className="w-20 h-1 mx-auto my-4 bg-secondary mb-6"></div>
                </div>
                <div className="min-h-full flex flex-col justify-center items-center pt-0">
                    <div className="z-20 grid items-center h-full p-6 md:py-0 md:grid-cols-3">
                        <div className="md:col-span-1 w-48 h-48 mb-4 crop-circle mx-auto md:ml-40">
                            <Image
                                src="/profile-photo.png"
                                alt="Your Name"
                                fill
                                className="
                                crop-img
                                scale-115
                                object-cover
                                object-[50%_50%]
                                "
                            />
                        </div>
                        <div className="md:col-span-2 w-full flex flex-col justify-center items-center max-w-md mx-auto text-center mr-8">
                            <p className="text-secondary text-xl text-justify mb-4 font-light">
                              Audio software engineer with an MS in Media Arts and Technology from UCSB, building real-time audio tools in C++/JUCE, exploring neural audio synthesis and conversational AI.
                            </p>
                            <p className="text-secondary text-xl text-justify font-light">
                              Before graduate school, I co-founded and led a consultancy delivering 50+ projects across technology, data, and sustainability. I combine engineering, product thinking, and creative technology to build systems that are technically rigorous and meaningful.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <ContactCta />
        </div>
    );
}

export default Introduction;
