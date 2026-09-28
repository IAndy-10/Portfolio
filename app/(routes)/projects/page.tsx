import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Banner from "@/components/banner";
import HexagonalGrid from "@/components/hexagon";
import ProjectMobileDisplay from "@/components/project-mobile-display";


const ProjectsPage = () => {
    return (
        <>
            <ContainerPage>
                <TransitionPage />
                <div className="text-center mt-10 mb-12 px-4">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-6">
                        <span className="font-bold text-black">Projects</span>
                    </h1>
                </div>
                <br/>
                <div className="flex flex-col justify-center h-full px-4 py-10 md:px-8 md:py-16">
                    <div className="relative z-10 max-w-5xl mx-auto mt-6 space-y-12">
                        <div className="text-center">
                            <h2 className="text-2xl text-secondary mb-2">
                                From environmental systems to interactive media and audio technology
                            </h2>
                            <p className="text-primary text-1xl">
                                My background in environmental consulting and data-informed decision-making now extends into audio software, DSP, HCI, and computational media projects exploring relationships between humans, technology, and natural systems.
                            </p>
                        </div>
                    </div>
                </div>
            </ContainerPage>
            {/* Desktop: hexagon grid */}
            <div className="hidden md:block w-full relative flex items-center justify-center">
                <div className="relative z-0">
                    <HexagonalGrid rows={[[0,1,0,0,1,1],[0,1,0,1,0,0],[1,0,0,1,1,0],[1,0,0,1,0,0]]} />
                </div>
            </div>

            {/* Mobile: horizontal carousel */}
            <ProjectMobileDisplay />

            <Banner/>
        </>
    );
}

export default ProjectsPage;
