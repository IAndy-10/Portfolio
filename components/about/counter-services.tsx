import { dataCounter } from "@/data";
import CountUp from "react-countup";
import ProfileCard from "@/components/ui/profile-card";

const CounterServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto my-12">
      <ProfileCard />

      <div className="md:col-span-2 flex flex-col gap-6">
        <p className="text-lg text-secondary mt-8">
            I blend Art and Engineering to propose a look into a future where
            nature, humans, and technology thrive in synchrony.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {dataCounter.map(({ id, endCounter, text }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center"
            >
              <p className="text-4xl md:text-4xl font-normal text-secondary mb-1">
                + <CountUp end={endCounter} start={0} duration={5} />
              </p>
              <p className="text-foreground text-sm md:text-base uppercase">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterServices;
