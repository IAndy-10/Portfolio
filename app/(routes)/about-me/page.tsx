// page.tsx

"use client"

import ContainerPage from "@/components/container-page";
import { dataAboutPage, dataAboutPage_Ed, dataAboutPage_Teaching } from "@/data";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TimeLine_More from "@/components/time-line more";
import TransitionPage from "@/components/transition-page";
import Banner from "@/components/banner";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>

                {/* Intro más pequeña tipo portfolio */}
                <div className="text-center mt-10 mb-12 px-4">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-6">
                        <span className="font-bold text-black">About</span>
                    </h1>
                </div>
                <br/>

                <CounterServices />

                {/* ---- Work Experience ---- */}
                <div className="mt-16 space-y-4">
                    <h2 className="text-primary text-xl md:text-3xl font-bold text-left">
                        Work Experience
                    </h2>

                    <div className="w-full text-left">
                        <TimeLine data={dataAboutPage} />
                    </div>
                </div>

                <hr className="border-t-1 border-gray-300 my-12 mx-auto" />

                {/* ---- Education ---- */}
                <div className="mt-16 space-y-4">
                    <h2 className="text-primary text-xl md:text-3xl font-bold text-left">
                        Education
                    </h2>

                    <div className="w-full">
                        <TimeLine data={dataAboutPage_Ed} />
                    </div>
                </div>

                <hr className="border-t-1 border-gray-300 my-12 mx-auto" />

                {/* ---- Teaching ---- */}
                <div className="mt-16 space-y-4">
                    <h2 className="text-primary text-xl md:text-3xl font-bold text-left">
                        Teaching
                    </h2>

                    <div className="w-full">
                        <TimeLine data={dataAboutPage_Teaching} />
                    </div>
                </div>

                <hr className="border-t-1 border-gray-300 my-12 mx-auto" />

                {/* ---- More About Me ---- */}
                <div className="mt-16 space-y-4">
                    <h2 className="text-primary text-xl md:text-3xl font-bold text-left">
                        More About Me
                    </h2>

                    <div className="w-full">
                        <TimeLine_More />
                    </div>
                </div>

                <hr className="border-t-1 border-gray-300 my-12 mx-auto" />

                {/* ---- Contact ---- */}
                <div className="mt-16 space-y-4 mb-24">
                    <h2 className="text-primary text-xl md:text-3xl font-bold text-left">
                        Contact
                    </h2>
                    <a
                        href="mailto:italoandresrd@gmail.com"
                        className="inline-block text-secondary text-lg hover:underline"
                    >
                        italoandresrd@gmail.com
                    </a>
                </div>

            </ContainerPage>

            <Banner />
        </>
    );
}

export default AboutMePage;
