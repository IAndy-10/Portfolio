"use client"

import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex flex-col min-h-screen h-full bg-no-repeat">
        <Introduction />
        <Banner />
      </div>
    </main>
  );
}
