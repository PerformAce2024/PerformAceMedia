import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, useScroll } from "motion/react";

export default function HeroSection2() {
  // Create refs for the whole container and each section
  const containerRef = useRef(null);
  const insightXRef = useRef(null);
  const audienceXRef = useRef(null);
  const visionTVRef = useRef(null);
  const nativeHUBRef = useRef(null);

  // Set up more precise scroll tracking for each section
  const { scrollYProgress: containerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Check if sections are in view with more strict parameters
  const insightXInView = useInView(insightXRef, { once: true, amount: 0.6 });
  const audienceXInView = useInView(audienceXRef, { once: true, amount: 0.6 });
  const visionTVInView = useInView(visionTVRef, { once: true, amount: 0.6 });
  const nativeHUBInView = useInView(nativeHUBRef, { once: true, amount: 0.6 });

  // Create animation controls for each section
  const insightXControls = useAnimation();
  const audienceXControls = useAnimation();
  const visionTVControls = useAnimation();
  const nativeHUBControls = useAnimation();

  // Trigger animations when sections come into view
  useEffect(() => {
    if (insightXInView) {
      insightXControls.start("visible");
    }
  }, [insightXInView, insightXControls]);

  useEffect(() => {
    if (audienceXInView) {
      audienceXControls.start("visible");
    }
  }, [audienceXInView, audienceXControls]);

  useEffect(() => {
    if (visionTVInView) {
      visionTVControls.start("visible");
    }
  }, [visionTVInView, visionTVControls]);

  useEffect(() => {
    if (nativeHUBInView) {
      nativeHUBControls.start("visible");
    }
  }, [nativeHUBInView, nativeHUBControls]);

  // Animation variants
  const textFromLeftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1, // Small delay before starting child animations
      },
    },
  };

  const textItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageFromRightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textFromBottomVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  const imageFromLeftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textFromRightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1, // Small delay before starting child animations
      },
    },
  };

  // Threshold config for better scroll-based triggering
  const thresholdConfig = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7, // Higher threshold to delay animation start
  };

  // Track when container enters viewport to trigger first animation
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // If top of container is at or above the top of viewport,
        // and container is fully visible
        if (rect.top <= 0 && rect.bottom > window.innerHeight) {
          insightXControls.start("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [insightXControls]);

  return (
    <div ref={containerRef} className="relative bg-black text-white">
      {/* InsightX Section */}
      <section ref={insightXRef} className="min-h-screen flex items-center">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            <motion.div
              className="w-1/2"
              initial="hidden"
              animate={insightXControls}
              variants={textFromLeftVariants}
            >
              <motion.h2
                variants={textItemVariants}
                className="text-8xl font-bold text-secondary"
              >
                InsightX
              </motion.h2>
              <motion.p
                variants={textItemVariants}
                className="text-2xl text-secondary mt-6"
              >
                Tech + Data + APIs
              </motion.p>
              <motion.p
                variants={textItemVariants}
                className="text-2xl text-accent"
              >
                Deterministic Segmentation like never before
              </motion.p>
              <motion.div variants={textItemVariants}>
                <Link
                  to="/insightx"
                  className="inline-block mt-6 bg-primary text-secondary border-accent border-solid border-2 font-bold rounded-full px-8 py-3"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
            <div className="w-1/2 relative flex flex-col items-end">
              <motion.div
                className="relative"
                initial="hidden"
                animate={insightXControls}
                variants={imageFromRightVariants}
              >
                <img
                  src="/InsightX.png"
                  alt="Red Circle with People"
                  className="w-full"
                />
              </motion.div>
              <motion.div
                className="mt-6"
                initial="hidden"
                animate={insightXControls}
                variants={textFromBottomVariants}
              >
                <p className="text-4xl text-accent font-bold">
                  Deterministic Segmentation
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AudienceX Section */}
      <section ref={audienceXRef} className="min-h-screen flex items-center">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            <motion.div
              className="w-2/5 mr-8"
              initial="hidden"
              animate={audienceXControls}
              variants={imageFromLeftVariants}
            >
              <div className="relative">
                <img
                  src="/audienceX.png"
                  alt="Person with Megaphone"
                  className="w-full"
                />
              </div>
              <motion.div
                className="mt-6 text-left"
                initial="hidden"
                animate={audienceXControls}
                variants={textFromBottomVariants}
              >
                <p className="text-4xl text-accent font-bold">Brand Matrix</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-3/5"
              initial="hidden"
              animate={audienceXControls}
              variants={textFromRightVariants}
            >
              <motion.h2
                variants={textItemVariants}
                className="text-8xl font-bold text-secondary"
              >
                AudienceX
              </motion.h2>
              <motion.p
                variants={textItemVariants}
                className="text-2xl text-secondary mt-6"
              >
                Planning Execution RichMedia
              </motion.p>
              <motion.p
                variants={textItemVariants}
                className="text-2xl text-accent"
              >
                Brand Matrix
              </motion.p>
              <motion.div variants={textItemVariants}>
                <Link
                  to="/audiencex"
                  className="inline-block mt-6 bg-primary text-secondary border-accent border-solid border-2 font-bold rounded-full px-8 py-3"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VisionTV Section */}
      <section ref={visionTVRef} className="min-h-screen flex items-center">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            <motion.div
              className="w-1/2"
              initial="hidden"
              animate={visionTVControls}
              variants={textFromLeftVariants}
            >
              <motion.h2
                variants={textItemVariants}
                className="text-8xl font-bold text-secondary"
              >
                VisionTV
              </motion.h2>
              <motion.p
                variants={textItemVariants}
                className="text-2xl text-secondary mt-6"
              >
                OTT, OEMs, Fast Channels
              </motion.p>
              <motion.p
                variants={textItemVariants}
                className="text-2xl text-accent"
              >
                Unified CTV Plants
              </motion.p>
              <motion.div variants={textItemVariants}>
                <Link
                  to="/visiontv"
                  className="inline-block mt-6 bg-primary text-secondary border-accent border-solid border-2 font-bold rounded-full px-8 py-3"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
            <div className="w-1/2 relative flex flex-col items-end">
              <motion.div
                className="relative"
                initial="hidden"
                animate={visionTVControls}
                variants={imageFromRightVariants}
              >
                <img
                  src="/NativeHUB.png"
                  alt="Black Products"
                  className="w-full"
                />
              </motion.div>
              <motion.div
                className="mt-6"
                initial="hidden"
                animate={visionTVControls}
                variants={textFromBottomVariants}
              >
                <p className="text-4xl text-accent font-bold">Brand Stature</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NativeHUB Section */}
      <section ref={nativeHUBRef} className="min-h-screen flex items-center">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            <motion.div
              className="w-2/5 mr-8"
              initial="hidden"
              animate={nativeHUBControls}
              variants={imageFromLeftVariants}
            >
              <div className="relative">
                <img
                  src="/NativeHUB.png"
                  alt="Black Products"
                  className="w-full scale-x-[-1]"
                />
              </div>
              <motion.div
                className="mt-6 text-left"
                initial="hidden"
                animate={nativeHUBControls}
                variants={textFromBottomVariants}
              >
                <p className="text-4xl text-accent font-bold">
                  Mid Funnel = Consideration
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-3/5"
              initial="hidden"
              animate={nativeHUBControls}
              variants={textFromRightVariants}
            >
              <motion.h2
                variants={textItemVariants}
                className="text-8xl font-bold text-secondary"
              >
                NativeHUB
              </motion.h2>
              <motion.p
                variants={textItemVariants}
                className="text-2xl text-secondary mt-6"
              >
                All native in one place Planning Execution
              </motion.p>
              <motion.p
                variants={textItemVariants}
                className="text-2xl text-accent"
              >
                Unified Optimisation
              </motion.p>
              <motion.div variants={textItemVariants}>
                <Link
                  to="/nativehub"
                  className="inline-block mt-6 bg-primary text-secondary border-accent border-solid border-2 font-bold rounded-full px-8 py-3"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
