import Image from "next/image";
import SliderServices from "@/components/slider-services";
import PanelServices from "./panel-services";
import HexagonalGrid from "@/components/hexagon";
import ProjectMobileDisplay from "@/components/project-mobile-display";


const Introduction = () => {
    return (
        <div className=" z-20 w-full">
            {/* Introduction Section */}
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="z-20 grid items-center h-full p-6 md:py-0 md:grid-cols-2 gap-6">
                    <div className="flex flex-col justify-start items-start max-w-md mx-auto text-left">
                        <h1 className="text-black mb-5 text-xl leading-tight md:text-4xl md:mb-10 font-semibold">
                            Welcome, I'm Italo Rojas
                        </h1>
                        <p className="text-secondary text-xl ">
                         I build systems and experiences at the intersection of environmental data, sound, and interactive media                        
                         </p>
                    </div>
                    <div className="hidden md:block relative justify-center items-center w-full h-auto max-w-screen-lg mx-auto mt-1 md:mt-10 group">
                        {/* Imagen agrandada y subida */}
                        <Image
                            src="/araucarias1.png"
                            priority
                            width="900"  // Aumento el tamaño
                            height="900"  // Aumento el tamaño
                            alt="Avatar"
                            className="rounded-full transition-all duration-300 ease-in-out group-hover:opacity-0 absolute top-[-140px] left-0"  // Subo la imagen
                        />
                        {/* Imagen que aparece al hacer hover */}
                        <Image
                            src="/araucarias.png"
                            width="900"  // Aumento el tamaño
                            height="900"  // Aumento el tamaño
                            alt="New Avatar"
                            className="rounded-full absolute top-[-140px] left-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"  // Subo la imagen
                        />
                    </div>
                </div>
            </div>

            {/* Desktop: hexagon grid */}
            <div className="hidden md:block w-full relative flex items-center justify-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                    <h2 className="text-black text-4xl font-bold">PROJECTS</h2>
                    <p className="text-secondary text-2xl text-center">Sound & Interaction · Data & Science</p>
                </div>
                <div className="relative z-0">
                    <HexagonalGrid rows={[[0,1,0,0,1,1],[1,0,0,0,1,0],[1,1,0,0,0,1],[1,0,0,0,1,0]]} />
                </div>
            </div>

            {/* Mobile: horizontal carousel */}
            <ProjectMobileDisplay />


            {/* About Me Section */}
            <div className="w-full py-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-black">About Me</h2>
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
                                object-[50%_50%]   // <-- MOVE the image horizontally
                                "
                            />
                        </div>
                        <div className="md:col-span-2 w-full flex flex-col justify-center items-center max-w-md mx-auto text-center mr-8">
                            <p className="text-secondary text-xl text-justify mb-4">
                              Civil engineer and creative technologist with 5+ years in climate strategy and data systems, currently completing an MS in Media Arts and Technology (UCSB).
                            </p>
                            <p className="text-secondary text-xl text-justify">
                              I build experiences and systems at the intersection of environmental science, interactive media, and generative technology, creating work that is both technically rigorous and meaningful.                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
