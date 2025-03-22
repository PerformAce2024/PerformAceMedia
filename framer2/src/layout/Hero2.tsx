import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function HeroSection2() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const ballX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["75%", "75%", "25%", "75%", "25%"]
  );

  const ballZ = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [-10, 10, -10, 10, -10, 10]
  );
  const ballScale = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <>
      <div ref={heroRef} className="overflow-hidden container mx-auto px-5">
        <motion.div
          className="top-1/2  -translate-y-1/2 absolute aspect-square  transform "
          style={{
            left: ballX,
            scale: ballScale,
            zIndex: ballZ,
          }}
        >
          <motion.img
            src="/ball.png"
            alt="Ball"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <section className="flex justify-between  py-16">
          <div className="transform space-y-6 z-10 ">
            <h1 className="text-8xl font-extrabold">
              <span className="text-secondary">InsightX</span>
              <br />
            </h1>
            <p className="text-2xl text-secondary font-normal">
              Tech + Data + APIs
            </p>
            <p className="text-2xl text-accent font-normal">
              Deterministic Segmentation like never before
            </p>
            <Link
              to={"/audiencex"}
              className="inline-block bg-primary text-secondary border-accent border-solid border-2 font-bold font-sans rounded-full px-8 py-3"
            >
              Learn More
            </Link>
          </div>
          <div className="z-20 ">
            <div className="w-lg">
              <img src="/InsightX.png" alt="audienceX" />
            </div>
            <div className="mt-6">
              <p className="text-4xl text-accent font-bold bg-[linear-gradient(180deg, #FC213B 0%, #961423 100%)]">
                Deterministic Segmentation
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-between flex-row-reverse py-16">
          <div className="transform space-y-6 z-10 ">
            <h1 className="text-8xl font-extrabold">
              <span className="text-secondary">AudienceX</span>
              <br />
            </h1>
            <p className="text-2xl text-secondary font-normal">
              Planning Execution RichMedia
            </p>
            <p className="text-2xl text-accent font-normal">Brand Matrix </p>
            <Link
              to={"/audiencex"}
              className="inline-block bg-primary text-secondary border-accent border-solid border-2 font-bold font-sans rounded-full px-8 py-3"
            >
              Learn More
            </Link>
          </div>
          <div className="z-20 ">
            <div className="w-4xl scale-x-[-1]">
              <img src="/audienceX.png" alt="audienceX" />
            </div>
            <div className="mt-6 text-left">
              <p className="text-4xl text-accent font-bold bg-[linear-gradient(180deg, #FC213B 0%, #961423 100%)]">
                Brand Matrix{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-between py-16">
          <div className="transform space-y-6 z-10">
            <h1 className="text-8xl font-extrabold">
              <span className="text-secondary">VisionTV</span>
              <br />
            </h1>
            <p className="text-2xl text-secondary font-normal">
              OTT, OEMs,Fast Channels{" "}
            </p>
            <p className="text-2xl text-accent font-normal">
              Unified CTV Plants{" "}
            </p>
            <Link
              to={"/insightx"}
              className="inline-block bg-primary text-secondary border-accent border-solid border-2 font-bold font-sans rounded-full px-8 py-3"
            >
              Learn More
            </Link>
          </div>
          <div className="z-20  ">
            <div className="w-lg scale-x-[-1]">
              <img src="/NativeHUB.png" alt="NativeHUB" />
            </div>
            <div className="mt-6">
              <p className="text-4xl text-accent font-bold bg-[linear-gradient(180deg, #FC213B 0%, #961423 100%)]">
                Brand Stature{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-between flex-row-reverse py-16">
          <div className="transform space-y-6 z-10 ">
            <h1 className="text-8xl font-extrabold">
              <span className="text-secondary">NativeHUB</span>
              <br />
            </h1>
            <p className="text-2xl text-secondary font-normal">
              All native in one place Planning Execution
            </p>
            <p className="text-2xl text-accent font-normal">
              Unified Optimisation
            </p>
            <Link
              to={"/insightx"}
              className="inline-block bg-primary text-secondary border-accent border-solid border-2 font-bold font-sans rounded-full px-8 py-3"
            >
              Learn More
            </Link>
          </div>
          <div className="z-20 ">
            <div className="w-lg scale-x-[-1]">
              <img src="/NativeHUB.png" alt="NativeHUB" />
            </div>
            <div className="mt-6">
              <p className="text-4xl text-accent font-bold bg-[linear-gradient(180deg, #FC213B 0%, #961423 100%)]">
                Mid Funnel = Consideration{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
