import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function HeroSection2() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Create a subscription to scrollYProgress changes
    const unsubscribe = scrollYProgress.on("change", (value) => {
      console.log("Current scroll progress:", value);
    });

    // Clean up subscription when component unmounts
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Section 1 - InsightX (0 to 0.25)
  // - Entry animations with more bounce
  const insightXLeftTransform = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.0833, 0.1667, 0.25],
      ["-100vw", "0vw", "0vw", "-100vw"]
    ),
    { stiffness: 180, damping: 18, mass: 1.2 }
  );
  const insightXRightTransform = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.0833, 0.1667, 0.25],
      ["100vw", "0vw", "0vw", "100vw"]
    ),
    { stiffness: 180, damping: 18, mass: 1.2 }
  );

  // Section 2 - AudienceX (0.25 to 0.5)
  // - Fade animations should be smoother with less bounce
  const audienceXFadeTransform = useSpring(
    useTransform(scrollYProgress, [0.1667, 0.25, 0.4167, 0.5], [0, 1, 1, 0]),
    { stiffness: 100, damping: 22 }
  );

  // - Vertical slide animations with medium bounce
  const audienceXRightSlideTransform = useSpring(
    useTransform(
      scrollYProgress,
      [0.1667, 0.2083, 0.25],
      ["100vh", "50vh", "0vh"]
    ),
    { stiffness: 150, damping: 20, mass: 1 }
  );

  // - Exit animations should be crisp with less bounce
  const audienceXRightSlideRightTransform = useSpring(
    useTransform(scrollYProgress, [0.4167, 0.5], ["0vw", "100vw"]),
    { stiffness: 220, damping: 28 }
  );
  const audienceXLeftSlideLeftTransform = useSpring(
    useTransform(scrollYProgress, [0.4167, 0.5], ["0vw", "-100vw"]),
    { stiffness: 220, damping: 28 }
  );

  // Section 3 - VisionTV (0.5 to 0.75)
  // - Entry animations with pleasant bounce
  const visionTVLeftSlideUpTransform = useSpring(
    useTransform(
      scrollYProgress,
      [0.4167, 0.4583, 0.5],
      ["100vh", "50vh", "0vh"]
    ),
    { stiffness: 170, damping: 19, mass: 1.1 }
  );

  // - Exit animations with less bounce
  const visionTVLeftSlideLeftTransform = useSpring(
    useTransform(scrollYProgress, [0.6667, 0.75], ["0vw", "-100vw"]),
    { stiffness: 230, damping: 27 }
  );
  const visionTVRightSlideRightTransform = useSpring(
    useTransform(scrollYProgress, [0.6667, 0.75], ["0vw", "100vw"]),
    { stiffness: 230, damping: 27 }
  );

  // - Fade animations smooth
  const visionTVFadeTransform = useSpring(
    useTransform(scrollYProgress, [0.4167, 0.5, 0.6667, 0.75], [0, 1, 1, 0]),
    { stiffness: 100, damping: 24 }
  );

  // Section 4 - NativeHUB (0.75 to 1.0)
  // - Final section entry with special attention
  const nativeHubLeftFadeTransform = useSpring(
    useTransform(
      scrollYProgress,
      [0.6667, 0.7083, 0.75],
      ["100vh", "50vh", "0vh"]
    ),
    { stiffness: 160, damping: 20, mass: 1.1 }
  );

  // - Final section fade in with smooth elegant feel
  const nativeHubRightSlideUpTransform = useSpring(
    useTransform(scrollYProgress, [0.6667, 0.75, 1.0], [0, 1, 1]),
    { stiffness: 120, damping: 24, mass: 1 }
  );

  return (
    <>
      {/* Main container with 500vh height to allow scrolling */}
      <div
        ref={heroRef}
        className="container mx-auto px-5 h-[500vh] w-full relative"
      >
        {/* Container that sticks to the top and holds all sections */}
        <div className="sticky top-0 w-full h-screen">
          {/* Create visibility transforms for each section */}
          {/* Section 1 - InsightX (0 to 0.25) */}
          <motion.section
            className="absolute top-0 left-0 right-0 flex justify-between py-16 bg-primary h-full"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.0833, 0.1667, 0.25],
                [0, 1, 1, 0]
              ),
              display: useTransform(scrollYProgress, (value) =>
                value <= 0.3 ? "flex" : "none"
              ),
            }}
          >
            <motion.div
              style={{
                x: insightXLeftTransform,
              }}
              className="transform space-y-6 mt-40"
            >
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
                to={"/insightx"}
                className="inline-block bg-primary text-secondary border-accent border-solid border-2 font-bold font-sans rounded-full px-8 py-3"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              style={{
                x: insightXRightTransform,
              }}
            >
              <div className="w-96 mt-40 mr-20">
                <img src="/InsightX.png" alt="insightx" />
              </div>
              <div className="mt-6">
                <p className="text-4xl text-accent font-bold bg-[linear-gradient(180deg, #FC213B 0%, #961423 100%)]">
                  Deterministic Segmentation
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Section 2 - AudienceX (0.25 to 0.5) */}
          <motion.section
            className="absolute top-0 left-0 right-0 flex justify-between flex-row-reverse py-16 bg-primary h-full"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.1667, 0.25, 0.4167, 0.5],
                [0, 1, 1, 0]
              ),
              display: useTransform(scrollYProgress, (value) =>
                value > 0.2 && value <= 0.55 ? "flex" : "none"
              ),
            }}
          >
            <motion.div
              style={{
                y: audienceXRightSlideTransform,
                x: audienceXRightSlideRightTransform,
              }}
              className="transform space-y-6 mt-40"
            >
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
            </motion.div>
            <motion.div
              style={{
                opacity: audienceXFadeTransform,
                x: audienceXLeftSlideLeftTransform,
              }}
            >
              <div className="w-2xl scale-x-[-1]">
                <img src="/audienceX.png" alt="audienceX" />
              </div>
              <div className="mt-6 text-left">
                <p className="text-4xl text-accent font-bold bg-[linear-gradient(180deg, #FC213B 0%, #961423 100%)]">
                  Brand Matrix{" "}
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Section 3 - VisionTV (0.5 to 0.75) */}
          <motion.section
            className="absolute top-0 left-0 right-0 flex justify-between py-16 bg-primary h-full"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.4167, 0.5, 0.6667, 0.75],
                [0, 1, 1, 0]
              ),
              display: useTransform(scrollYProgress, (value) =>
                value > 0.45 && value <= 0.8 ? "flex" : "none"
              ),
            }}
          >
            <motion.div
              style={{
                y: visionTVLeftSlideUpTransform,
                x: visionTVLeftSlideLeftTransform,
              }}
              className="transform space-y-6 mt-40"
            >
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
                to={"/visiontv"}
                className="inline-block bg-primary text-secondary border-accent border-solid border-2 font-bold font-sans rounded-full px-8 py-3"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              style={{
                x: visionTVRightSlideRightTransform,
              }}
            >
              <motion.div
                style={{
                  opacity: visionTVFadeTransform,
                }}
                className="w-xl h-[80%]"
              >
                <img src="/VisionTV.png" alt="visionTV" />
              </motion.div>
              <motion.div
                style={{
                  y: visionTVLeftSlideUpTransform,
                }}
                className="mt-6"
              >
                <p className="text-4xl text-accent font-bold bg-[linear-gradient(180deg, #FC213B 0%, #961423 100%)] text-center">
                  Brand Stature{" "}
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Section 4 - NativeHUB (0.75 to 1.0) */}
          <motion.section
            className="absolute top-0 left-0 right-0 flex justify-between flex-row-reverse py-16 bg-primary h-full"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.6667, 0.75, 1.0],
                [0, 1, 1]
              ),
              display: useTransform(scrollYProgress, (value) =>
                value > 0.7 ? "flex" : "none"
              ),
            }}
          >
            <motion.div
              style={{
                opacity: nativeHubRightSlideUpTransform,
              }}
              className="transform space-y-6 mt-40"
            >
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
                to={"/nativehub"}
                className="inline-block bg-primary text-secondary border-accent border-solid border-2 font-bold font-sans rounded-full px-8 py-3"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              style={{
                y: nativeHubLeftFadeTransform,
              }}
            >
              <div className="w-lg scale-x-[-1] h-[80%]">
                <img src="/NativeHUB.png" alt="NativeHUB" />
              </div>
              <div className="mt-6">
                <p className="text-4xl text-accent font-bold bg-[linear-gradient(180deg, #FC213B 0%, #961423 100%)]">
                  Mid Funnel = Consideration{" "}
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
        {/* Debug element to visualize scroll progress */}
      </div>
    </>
  );
}
