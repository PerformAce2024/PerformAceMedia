// import React, { useEffect, useState, useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "motion/react";

// // Data structure for the balls
// const ballsData = [
//   // Row 1
//   [
//     { id: "age", label: "Age" },
//     { id: "sex", label: "Sex" },
//     { id: "device", label: "Device" },
//     { id: "life-event", label: "Life event" },
//     { id: "behaviour", label: "Behaviour" },
//     { id: "map", label: "MAP" },
//     { id: "economics-1", label: "Economics" },
//   ],
//   // Row 2
//   [
//     { id: "economics-2", label: "Economics" },
//     { id: "travel", label: "Travel" },
//     { id: "d2c", label: "D2C" },
//     { id: "gaming", label: "Gaming" },
//     { id: "vehicle", label: "Vehicle" },
//     { id: "wealth-1", label: "Wealth" },
//   ],
//   // Row 3
//   [
//     { id: "wealth-2", label: "Wealth" },
//     { id: "credit-score", label: "Credit Score" },
//     { id: "marital-status", label: "Marital Status" },
//     { id: "parenthood", label: "Parenthood" },
//     { id: "experience", label: "Experience" },
//   ],
//   // Row 4
//   [
//     { id: "education", label: "Education" },
//     { id: "niche-behaviour", label: "Niche Behaviour" },
//     { id: "cross-device", label: "Cross Device" },
//     { id: "more", label: "Manymore..." },
//   ],
// ];

// const ScrollAnimation = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeBall, setActiveBall] = useState(null);
//   const [ballRefs, setBallRefs] = useState({});
//   const [finalText, setFinalText] = useState("");
//   const [isComplete, setIsComplete] = useState(false);
//   const [pathPoints, setPathPoints] = useState([]);

//   // Initialize refs for all balls
//   useEffect(() => {
//     const refs = {};
//     ballsData.flat().forEach((ball) => {
//       refs[ball.id] = React.createRef();
//     });
//     setBallRefs(refs);
//   }, []);

//   // Setup scroll progress tracking
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start", "end"],
//   });

//   // Smooth out the scroll progress
//   const smoothProgress = useSpring(scrollYProgress, {
//     damping: 20,
//     stiffness: 100,
//   });

//   // Calculate path points after all balls are rendered
//   useEffect(() => {
//     // Wait for component to mount and refs to be populated
//     const calculatePathPoints = () => {
//       if (!containerRef.current) return;

//       const container = containerRef.current?.getBoundingClientRect();
//       const newPathPoints = [];

//       // Starting point (top-left corner)
//       newPathPoints.push({ x: 50, y: 50 });

//       // Add target points for each row (first ball in first row, second ball in other rows)
//       ballsData.forEach((row, rowIndex) => {
//         const ballIndex = rowIndex === 0 ? 0 : 1; // First ball in first row, second ball in others
//         const ball = row[ballIndex];
//         const ballRef = ballRefs[ball.id];

//         if (ballRef && ballRef.current) {
//           const ballRect = ballRef.current.getBoundingClientRect();
//           const relativeX = ballRect.left + ballRect.width / 2 - container.left;
//           const relativeY = ballRect.top + ballRect.height / 2 - container.top;

//           newPathPoints.push({ x: relativeX, y: relativeY });
//         }
//       });

//       if (newPathPoints.length > 1) {
//         setPathPoints(newPathPoints);
//       }
//     };

//     // Check if all ball refs are available
//     const allBallsReady = ballsData
//       .flat()
//       .every((ball) => ballRefs[ball.id] && ballRefs[ball.id].current);

//     if (allBallsReady) {
//       // Use a small delay to ensure DOM is fully rendered
//       setTimeout(calculatePathPoints, 500);
//     }

//     // Recalculate on window resize
//     window.addEventListener("resize", calculatePathPoints);
//     return () => window.removeEventListener("resize", calculatePathPoints);
//   }, [ballRefs]);

//   // Handle scroll progress changes
//   useEffect(() => {
//     if (pathPoints.length <= 1) return;

//     const unsubscribe = smoothProgress.onChange((value) => {
//       // Calculate which segment of the path we're on based on scroll progress
//       const segments = pathPoints.length - 1;
//       const segmentSize = 1 / segments;

//       for (let i = 0; i < segments; i++) {
//         if (value <= (i + 1) * segmentSize) {
//           // We're in segment i
//           const rowIndex = i;
//           if (rowIndex >= 0 && rowIndex < ballsData.length) {
//             // Determine which ball to activate
//             const ballIndex = rowIndex === 0 ? 0 : 1; // First ball in first row, second ball in others
//             const ball = ballsData[rowIndex][ballIndex];

//             setActiveBall(ball.id);

//             // If we're at the end, show the final text
//             if (i === segments - 1 && value > 0.9) {
//               setFinalText(ball.label);
//               setIsComplete(true);
//             } else {
//               setIsComplete(false);
//             }
//           }
//           break;
//         }
//       }
//     });

//     return () => unsubscribe();
//   }, [smoothProgress, pathPoints]);

//   // Get red ball position based on scroll progress
//   const redBallX = useTransform(
//     smoothProgress,
//     [0, 1],
//     pathPoints.length >= 2
//       ? [pathPoints[0].x, pathPoints[pathPoints.length - 1].x]
//       : [0, 0]
//   );

//   const redBallY = useTransform(
//     smoothProgress,
//     [0, 1],
//     pathPoints.length >= 2
//       ? [pathPoints[0].y, pathPoints[pathPoints.length - 1].y]
//       : [0, 0]
//   );

//   // Calculate intermediate positions for smoother movement
//   const getPositionAtProgress = (progress) => {
//     if (pathPoints.length <= 1) return { x: 0, y: 0 };

//     const segments = pathPoints.length - 1;
//     const segmentSize = 1 / segments;

//     // Find which segment we're in
//     const segmentIndex = Math.min(
//       Math.floor(progress / segmentSize),
//       segments - 1
//     );
//     const segmentProgress =
//       (progress - segmentIndex * segmentSize) / segmentSize;

//     // Get the start and end points of this segment
//     const start = pathPoints[segmentIndex];
//     const end = pathPoints[segmentIndex + 1];

//     // Linear interpolation between points
//     return {
//       x: start.x + (end.x - start.x) * segmentProgress,
//       y: start.y + (end.y - start.y) * segmentProgress,
//     };
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-secondary text-white space-y-6 py-10"
//       //   style={{ height: "200vh" }} // Tall enough for scrolling
//     >
//       {/* Render ball rows */}
//       {ballsData.map((row, rowIndex) => (
//         <div
//           key={`row-${rowIndex}`}
//           className="flex justify-evenly items-center gap-2 "
//         >
//           {row.map((ball) => (
//             <motion.div
//               key={ball.id}
//               ref={ballRefs[ball.id]}
//               className={`rounded-full bg-gray-900 flex items-center justify-center shadow-lg`}
//               style={{
//                 width: `${80 + rowIndex * 40}px`,
//                 height: `${80 + rowIndex * 40}px`,
//               }}
//             >
//               <motion.p
//                 className={`text-center text-sm font-medium
//                           ${
//                             activeBall === ball.id
//                               ? "text-red-500"
//                               : "text-white"
//                           }`}
//               >
//                 {ball.label}
//               </motion.p>
//             </motion.div>
//           ))}
//         </div>
//       ))}

//       {/* The moving red ball */}

//       <motion.div
//         className=" top-0 left-0 absolute size-4 rounded-full bg-red-500 z-50 flex items-center justify-center"
//         style={{
//           x: redBallX ?? 0,
//           y: redBallY ?? 0,
//           scale: isComplete ? 2 : 1,
//         }}
//         transition={{ duration: 0.2 }}
//       />

//       {/* Optional: Draw path for debugging */}
//       {pathPoints.length > 1 && (
//         <svg className="top-0 left-0 w-full h-full pointer-events-none opacity-30 bg-accent">
//           <motion.path
//             d={`M ${pathPoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
//             stroke="rgba(255, 0, 0, 0.3)"
//             strokeWidth="2"
//             fill="none"
//             strokeDasharray="5 5"
//           />
//         </svg>
//       )}
//     </div>
//   );
// };

// export default ScrollAnimation;

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Define types
type BallData = {
  id: string;
  label: string;
};

type BallPosition = {
  x: number;
  y: number;
};

type BallRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

// Data structure for the balls
const ballsData: BallData[][] = [
  // Row 1
  [
    { id: "age", label: "Age" },
    { id: "sex", label: "Sex" },
    { id: "device", label: "Device" },
    { id: "life-event", label: "Life event" },
    { id: "behaviour", label: "Behaviour" },
    { id: "map", label: "MAP" },
    { id: "economics-1", label: "Economics" },
  ],
  // Row 2
  [
    { id: "economics-2", label: "Economics" },
    { id: "travel", label: "Travel" },
    { id: "d2c", label: "D2C" },
    { id: "gaming", label: "Gaming" },
    { id: "vehicle", label: "Vehicle" },
    { id: "wealth-1", label: "Wealth" },
  ],
  // Row 3
  [
    { id: "wealth-2", label: "Wealth" },
    { id: "credit-score", label: "Credit Score" },
    { id: "marital-status", label: "Marital Status" },
    { id: "parenthood", label: "Parenthood" },
    { id: "experience", label: "Experience" },
  ],
  // Row 4
  [
    { id: "education", label: "Education" },
    { id: "niche-behaviour", label: "Niche Behaviour" },
    { id: "cross-device", label: "Cross Device" },
    { id: "more", label: "Manymore..." },
  ],
];

const ScrollAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBall, setActiveBall] = useState<string | null>(null);
  const [ballRefs, setBallRefs] = useState<BallRefs>({});
  const [finalText, setFinalText] = useState<string>("");
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [pathPoints, setPathPoints] = useState<BallPosition[]>([]);
  const [redBallPos, setRedBallPos] = useState<BallPosition>({ x: 50, y: 50 });

  // Initialize refs for all balls
  useEffect(() => {
    console.log("Initializing ball refs");
    const refs: BallRefs = {};
    ballsData.flat().forEach((ball) => {
      refs[ball.id] = React.createRef<HTMLDivElement>();
    });
    setBallRefs(refs);
  }, []);

  // Setup scroll progress tracking with explicit offset values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  // Force render after component mounts to ensure refs are attached
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Forcing rerender for ref attachment");
      setBallRefs((prev) => ({ ...prev }));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Calculate path points after all balls are rendered
  useEffect(() => {
    if (!containerRef.current) {
      console.log("Container ref not available yet");
      return;
    }

    const calculatePathPoints = () => {
      console.log("Calculating path points");
      const container = containerRef.current?.getBoundingClientRect();
      if (!container) {
        console.log("Container not available for measurements");
        return;
      }

      const newPathPoints: BallPosition[] = [];

      // Starting point (top-left corner)
      newPathPoints.push({ x: 50, y: 50 });

      // Log all ball refs to debug
      console.log("Ball refs:", Object.keys(ballRefs).length);

      // Add target points for each row (first ball in first row, second ball in other rows)
      let allBallsFound = true;
      ballsData.forEach((row, rowIndex) => {
        const ballIndex = rowIndex === 0 ? 0 : 1;
        if (ballIndex >= row.length) {
          console.log(`Invalid ballIndex ${ballIndex} for row ${rowIndex}`);
          allBallsFound = false;
          return;
        }

        const ball = row[ballIndex];
        const ballRef = ballRefs[ball.id];

        if (!ballRef || !ballRef.current) {
          console.log(`Ball ref missing for ${ball.id}`);
          allBallsFound = false;
          return;
        }

        const ballRect = ballRef.current.getBoundingClientRect();
        const relativeX = ballRect.left + ballRect.width / 2 - container.left;
        const relativeY = ballRect.top + ballRect.height / 2 - container.top;

        console.log(`Ball ${ball.id} position: (${relativeX}, ${relativeY})`);
        newPathPoints.push({ x: relativeX, y: relativeY });
      });

      if (!allBallsFound) {
        console.log("Not all balls found, retrying later");
        return;
      }

      if (newPathPoints.length > 1) {
        console.log("Setting path points:", newPathPoints);
        setPathPoints(newPathPoints);
      }
    };

    // Call immediately and then set up observer
    calculatePathPoints();

    // Use MutationObserver to detect DOM changes that might affect ball positions
    const observer = new MutationObserver(() => {
      console.log("DOM changed, recalculating path points");
      calculatePathPoints();
    });

    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    // Setup interval to retry path calculation
    const interval = setInterval(() => {
      if (pathPoints.length <= 1) {
        console.log("Retrying path calculation");
        calculatePathPoints();
      } else {
        clearInterval(interval);
      }
    }, 1000);

    // Recalculate on window resize
    const handleResize = () => {
      console.log("Window resized, recalculating path points");
      calculatePathPoints();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      clearInterval(interval);
    };
  }, [ballRefs, containerRef.current]);

  // Handle scroll progress changes
  useEffect(() => {
    if (pathPoints.length <= 1) {
      console.log("Not enough path points for scroll handling");
      return;
    }

    const handleScroll = (value: number) => {
      console.log("Scroll progress:", value);

      // Calculate which segment of the path we're on
      const segments = pathPoints.length - 1;
      const segmentSize = 1 / segments;

      // Calculate current position along the path
      const currentPoint = getCurrentPosition(value);
      setRedBallPos(currentPoint);

      for (let i = 0; i < segments; i++) {
        if (value <= (i + 1) * segmentSize) {
          // We're in segment i
          const rowIndex = i;
          if (rowIndex >= 0 && rowIndex < ballsData.length) {
            const ballIndex = rowIndex === 0 ? 0 : 1;
            if (ballIndex < ballsData[rowIndex].length) {
              const ball = ballsData[rowIndex][ballIndex];

              console.log("Activating ball:", ball.id, "at segment:", i);
              setActiveBall(ball.id);

              if (i === segments - 1 && value > 0.9) {
                setFinalText(ball.label);
                setIsComplete(true);
              } else {
                setIsComplete(false);
              }
            }
          }
          break;
        }
      }
    };

    // Initial call
    handleScroll(scrollYProgress.get());

    // Subscribe to changes
    const unsubscribe = scrollYProgress.onChange(handleScroll);

    return () => unsubscribe();
  }, [scrollYProgress, pathPoints]);

  // Get current position along the path using linear interpolation
  const getCurrentPosition = (progress: number): BallPosition => {
    if (pathPoints.length <= 1) return { x: 50, y: 50 };

    const segments = pathPoints.length - 1;
    const segmentSize = 1 / segments;

    // Find which segment we're in
    const segmentIndex = Math.min(
      Math.floor(progress / segmentSize),
      segments - 1
    );
    const segmentProgress =
      (progress - segmentIndex * segmentSize) / segmentSize;

    // Get the start and end points of this segment
    const start = pathPoints[segmentIndex];
    const end = pathPoints[segmentIndex + 1];

    // Linear interpolation between points
    return {
      x: start.x + (end.x - start.x) * segmentProgress,
      y: start.y + (end.y - start.y) * segmentProgress,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-secondary text-white space-y-6 py-10"
      style={{ height: "200vh" }} // Make sure there's space to scroll
    >
      {/* Debug info */}
      <div className="fixed top-4 right-4 bg-black bg-opacity-75 text-white p-2 z-50">
        <p>Active Ball: {activeBall || "None"}</p>
        <p>Path Points: {pathPoints.length}</p>
        <p>Ball Refs: {Object.keys(ballRefs).length}</p>
        <p>
          Red Ball: ({redBallPos.x.toFixed(0)}, {redBallPos.y.toFixed(0)})
        </p>
        <p>Scroll Progress: {scrollYProgress.get().toFixed(2)}</p>
      </div>

      {/* Render ball rows */}
      {ballsData.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex justify-evenly items-center gap-2 py-6"
        >
          {row.map((ball) => (
            <motion.div
              key={ball.id}
              ref={ballRefs[ball.id]}
              className={`rounded-full bg-gray-900 flex items-center justify-center shadow-lg`}
              style={{
                width: `${80 + rowIndex * 40}px`,
                height: `${80 + rowIndex * 40}px`,
              }}
            >
              <motion.p
                className={`text-center text-sm font-medium
                          ${
                            activeBall === ball.id
                              ? "text-red-500"
                              : "text-white"
                          }`}
              >
                {ball.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      ))}

      {/* The moving red ball - directly using state rather than transform */}
      <div
        className="fixed size-8 rounded-full bg-red-500 z-40 flex items-center justify-center"
        style={{
          left: `${redBallPos.x - 16}px`,
          top: `${redBallPos.y - 16}px`,
          transform: `scale(${isComplete ? 2 : 1})`,
          transition: "transform 0.2s",
        }}
      />

      {/* Text below the red ball when animation completes */}
      {isComplete && (
        <div
          className="fixed text-white text-xl font-bold z-40"
          style={{
            left: `${redBallPos.x - 50}px`,
            top: `${redBallPos.y + 20}px`,
            width: "100px",
            textAlign: "center",
          }}
        >
          {finalText}
        </div>
      )}

      {/* Draw path for debugging */}
      {pathPoints.length > 1 && (
        <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-30">
          <path
            d={`M ${pathPoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
            stroke="rgba(255, 0, 0, 0.5)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="5 5"
          />
          {/* Add dots at each path point for clarity */}
          {pathPoints.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="red"
              opacity="0.7"
            />
          ))}
        </svg>
      )}
    </div>
  );
};

export default ScrollAnimation;
