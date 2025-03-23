import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

const ballsData = [
  ["Age", "Sex", "Device", "Life event", "Behaviour", "MAP", "Economics"],
  ["Economics", "Travel", "D2C", "Gaming", "Vehicle", "Wealth"],
  ["Wealth", "Credit Score", "Marital Status", "Parenthood", "Experience"],
  ["Education", "Niche Behaviour", "Cross Device", "Manymore..."],
];

const startX = 50;
const startY = 50;
const rowSpacing = 60;
const colSpacing = 80;
const width = 600;

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: containerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  const scrollYProgress = useSpring(containerScrollProgress, {
    stiffness: 30,
    damping: 20,
  });

  const { transformXArr, transformYArr, breakpoints } = useMemo(() => {
    // Use non-reversed breakpoints so animation follows scroll direction
    const breakpoints = Array.from({ length: 15 }, (_, i) => i / 14);

    const transformXArr: number[] = [
      0, // 0th checkpoint
      0,
      40, // 2st checkpoint
      40,
      40,
      120, // 4rd checkpoint
      120,
      160, // 5th checkpoint
      160,
      160,
      200, // 7th checkpoint
      200,
      200,
      240,
      240,
    ];

    // Start at top (low Y value) and move down (to higher Y values) as scroll increases
    const transformYArr: number[] = [
      0, // 0th checkpoint - start at top
      0,
      0,
      50,
      50,
      50,
      50,
      50,
      112,
      112,
      112,
      178,
      178,
      178,
      300, // Last checkpoint - end at bottom
    ];

    return {
      breakpoints,
      transformXArr,
      transformYArr,
    };
  }, []);

  const scale = useTransform(
    scrollYProgress,
    breakpoints,
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8]
  );
  const x = useTransform(scrollYProgress, breakpoints, transformXArr);
  const y = useTransform(scrollYProgress, breakpoints, transformYArr);

  // Text opacity transformation - fade in only at the very end of scroll
  const textOpacity = useTransform(
    scrollYProgress,
    [0.95, 0.98, 1], // Only start fading in at 95% of scroll
    [0, 0.5, 1] // From invisible to fully visible
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-gray-900 flex justify-center items-center"
    >
      <svg className="w-full h-full" viewBox="0 0 600 325">
        <defs>
          <linearGradient
            id="blackGreyGradient"
            x1="0%"
            y1="0%"
            x2="25%"
            y2="100%"
          >
            <stop stopColor="#443E3E" />
            <stop offset="0.457734" stopColor="#090000" />
            <stop offset="0.971765" stopColor="#090000" />
          </linearGradient>

          <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        <g>
          {ballsData.map((row, rowIndex) => {
            let y = startY + rowIndex * rowSpacing;

            if (rowIndex === 1) {
              y -= 5;
            } else if (rowIndex === ballsData.length - 1) {
              y += 10;
            }

            const rowWidth = (row.length - 1) * colSpacing;
            const offsetX = (width - rowWidth) / 2;
            const radius = 15 + rowIndex * 5;

            return row.map((text, colIndex) => {
              const x = offsetX + colIndex * colSpacing;

              return (
                <g
                  key={`${rowIndex}-${colIndex}`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={radius}
                    fill={"url(#blackGreyGradient)"}
                    filter="url(#softBlur)"
                  />
                  <text x={x} y={y} className="text-[0.5rem]" fill="white">
                    {text}
                  </text>
                </g>
              );
            });
          })}
        </g>

        <motion.g>
          <motion.circle
            cx={startX - 3}
            cy={startY - 25}
            r="5"
            fill="url(#redGradient)"
            filter="url(#softBlur2)"
            style={{ x, y, scale }}
          />

          {/* Text that fades in when ball reaches bottom */}
          <motion.text
            fontSize="14"
            fontWeight="bold"
            fill="white"
            style={{
              textAlign: "center",
              x: x,
              y: y,
              opacity: textOpacity,
              translateY: 5, // Position text above the ball
            }}
          >
            Deterministic
          </motion.text>
          <motion.text
            fontSize="14"
            fontWeight="bold"
            fill="white"
            // textAnchor="right"
            style={{
              textAlign: "center",
              x: x,
              y: y,
              opacity: textOpacity,
              translateY: 19, // Position text just below the first line but still above the ball
            }}
          >
            Segmentation
          </motion.text>
        </motion.g>
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="25%" y2="100%">
            <stop stopColor="#A0000A" />
            <stop offset="0.457734" stopColor="#A0000A" />
            <stop offset="0.971765" stopColor="#2E0005" />
          </linearGradient>

          <filter id="softBlur2" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.1" />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
