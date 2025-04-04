import { WordRotate } from "@/components/magicui/word-rotate";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function HeroSection() {
  // Using global scroll for better control
  const heroRef = useRef(null);

  // Use section-specific scroll instead of global
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Create transforms based on scroll position
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const ballY = useTransform(scrollYProgress, [0.3, 1], ["-70%", "100%"]);
  const ballScale = useTransform(scrollYProgress, [0.3, 1], [1, 2]);

  return (
    <>
      <div
        ref={heroRef}
        className="container mx-auto py-2 px-4 md:py-10 flex flex-col items-center justify-center h-screen relative"
      >
        <motion.div
          className="md:w-1/2 space-y-6 m-auto text-center z-10"
          style={{ opacity: textOpacity }}
        >
          <h1 className=" text-4xl md:text-7xl font-extrabold">
            <span className="text-accent">Build</span>
            <br />
            <WordRotate
              className="text-xl md:text-7xl"
              words={["Brand", "Consideration", "Engagement", "Growth"]}
            />
          </h1>
          <p className="text-lg md:text-4xl text-secondary font-normal">
            Your Ace to make marketing perform
          </p>
          <Link
            to={"/partners"}
            className="inline-block bg-accent text-primary font-bold font-sans rounded-full px-8 py-3"
          >
            Slide into our Inbox
          </Link>
        </motion.div>

        {/* Ball that comes from bottom and scales */}
        <motion.div
          className="absolute aspect-square left-1/2 transform -translate-x-1/2"
          style={{
            bottom: ballY,
            scale: ballScale,
          }}
        >
          <motion.img
            src="/ball.png"
            alt="Ball"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </>
  );
}
