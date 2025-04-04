// import React, { useRef } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import CardInsightX from "@/components/custom/CardInsightX";

// const Insightxscroll = () => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   // Create all transform scales at component level
//   const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
//   const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
//   const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
//   const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
//   const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

//   // For the sequenced version, create all opacity and scale transforms individually
//   // Card 1 transforms
//   const card1Opacity = useTransform(
//     scrollYProgress,
//     [0, 0.03, 0.12, 0.15],
//     [0, 1, 1, 0]
//   );
//   const card1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.2]);

//   // Shape 1 transforms
//   const shape1Opacity = useTransform(
//     scrollYProgress,
//     [0.12, 0.15, 0.25, 0.27],
//     [0, 1, 1, 0]
//   );
//   const shape1Scale = useTransform(scrollYProgress, [0.15, 0.27], [1, 5]);

//   // Card 2 transforms
//   const card2Opacity = useTransform(
//     scrollYProgress,
//     [0.25, 0.27, 0.4, 0.42],
//     [0, 1, 1, 0]
//   );
//   const card2Scale = useTransform(scrollYProgress, [0.27, 0.42], [1, 1.2]);

//   // Shape 2 transforms
//   const shape2Opacity = useTransform(
//     scrollYProgress,
//     [0.4, 0.42, 0.53, 0.55],
//     [0, 1, 1, 0]
//   );
//   const shape2Scale = useTransform(scrollYProgress, [0.42, 0.55], [1, 5]);

//   // Card 3 transforms
//   const card3Opacity = useTransform(
//     scrollYProgress,
//     [0.53, 0.55, 0.66, 0.68],
//     [0, 1, 1, 0]
//   );
//   const card3Scale = useTransform(scrollYProgress, [0.55, 0.68], [1, 1.2]);

//   // Shape 3 transforms
//   const shape3Opacity = useTransform(
//     scrollYProgress,
//     [0.66, 0.68, 0.79, 0.81],
//     [0, 1, 1, 0]
//   );
//   const shape3Scale = useTransform(scrollYProgress, [0.68, 0.81], [1, 5]);

//   // Card 4 transforms
//   const card4Opacity = useTransform(
//     scrollYProgress,
//     [0.79, 0.81, 0.92, 0.94],
//     [0, 1, 1, 0]
//   );
//   const card4Scale = useTransform(scrollYProgress, [0.81, 0.94], [1, 1.2]);

//   // Shape 4 transforms
//   const shape4Opacity = useTransform(
//     scrollYProgress,
//     [0.92, 0.94, 1],
//     [0, 1, 1]
//   );
//   const shape4Scale = useTransform(scrollYProgress, [0.94, 1], [1, 3]);

//   return (
//     <div ref={container} className="relative" style={{ height: "450vh" }}>
//       <div className="sticky top-0 overflow-hidden h-screen flex items-center justify-center">
//         {/* Card 1 */}
//         <motion.div
//           style={{ opacity: card1Opacity, scale: card1Scale }}
//           className="absolute w-full max-w-lg"
//         >
//           <CardInsightX
//             title="Seamless Integration"
//             description="Connects with multiple media publishers, data platforms, and all available public and private APIs to fetch granular, segment-level data."
//             shape="circle-yellow.svg"
//           />
//         </motion.div>

//         {/* Shape 1 */}
//         <motion.div
//           style={{ opacity: shape1Opacity, scale: shape1Scale }}
//           className="absolute w-72 h-72"
//         >
//           <img
//             src="circle.png"
//             alt="Shape 1"
//             className="w-full h-full object-contain"
//           />
//         </motion.div>

//         {/* Card 2 */}
//         <motion.div
//           style={{ opacity: card2Opacity, scale: card2Scale }}
//           className="absolute w-full max-w-lg"
//         >
//           <CardInsightX
//             title="Custom Audience Segmentation"
//             description="Delivers tailor-made audience segments designed specifically to meet advertiser needs, ensuring maximum campaign relevance."
//             shape="bars-yellow.svg"
//           />
//         </motion.div>

//         {/* Shape 2 */}
//         <motion.div
//           style={{ opacity: shape2Opacity, scale: shape2Scale }}
//           className="absolute w-72 h-72"
//         >
//           <img
//             src="bars.png"
//             alt="Shape 2"
//             className="w-full h-full object-contain"
//           />
//         </motion.div>

//         {/* Card 3 */}
//         <motion.div
//           style={{ opacity: card3Opacity, scale: card3Scale }}
//           className="absolute w-full max-w-lg"
//         >
//           <CardInsightX
//             title="Deterministic Segments"
//             description="Provides precise, deterministic audience segments with unique identifiers for direct activation across marketing platforms."
//             shape="hexagonal-yellow.svg"
//           />
//         </motion.div>

//         {/* Shape 3 */}
//         <motion.div
//           style={{ opacity: shape3Opacity, scale: shape3Scale }}
//           className="absolute w-72 h-72"
//         >
//           <img
//             src="hexagonal.png"
//             alt="Shape 3"
//             className="w-full h-full object-contain"
//           />
//         </motion.div>

//         {/* Card 4 */}
//         <motion.div
//           style={{ opacity: card4Opacity, scale: card4Scale }}
//           className="absolute w-full max-w-lg"
//         >
//           <CardInsightX
//             title="Privacy-First Approach"
//             description="Builds audience segments without accessing any personally identifiable information (PII), ensuring data privacy and compliance."
//             shape="football-yellow.svg"
//           />
//         </motion.div>

//         {/* Shape 4 */}
//         <motion.div
//           style={{ opacity: shape4Opacity, scale: shape4Scale }}
//           className="absolute w-72 h-72"
//         >
//           <img
//             src="football.png"
//             alt="Shape 4"
//             className="w-full h-full object-contain"
//           />
//         </motion.div>
//         {/* Card 5 */}
//         <motion.div
//           style={{ opacity: card4Opacity, scale: card4Scale }}
//           className="absolute w-full max-w-lg"
//         >
//           <CardInsightX
//             title="Enterprise Security"
//             description="Bank-level encryption and compliance with industry standards to protect your data."
//             shape="football-yellow.svg"
//           />
//         </motion.div>

//         {/* Shape 5 */}
//         <motion.div
//           style={{ opacity: shape4Opacity, scale: shape4Scale }}
//           className="absolute w-72 h-72"
//         >
//           <img
//             src="football.png"
//             alt="Shape 4"
//             className="w-full h-full object-contain"
//           />
//         </motion.div>
//         {/* Card 6 */}
//         <motion.div
//           style={{ opacity: card4Opacity, scale: card4Scale }}
//           className="absolute w-full max-w-lg"
//         >
//           <CardInsightX
//             title="Enterprise Security"
//             description="Bank-level encryption and compliance with industry standards to protect your data."
//             shape="football-yellow.svg"
//           />
//         </motion.div>

//         {/* Shape 6 */}
//         <motion.div
//           style={{ opacity: shape4Opacity, scale: shape4Scale }}
//           className="absolute w-72 h-72"
//         >
//           <img
//             src="football.png"
//             alt="Shape 4"
//             className="w-full h-full object-contain"
//           />
//         </motion.div>
//         {/* Card 7 */}
//         <motion.div
//           style={{ opacity: card4Opacity, scale: card4Scale }}
//           className="absolute w-full max-w-lg"
//         >
//           <CardInsightX
//             title="Enterprise Security"
//             description="Bank-level encryption and compliance with industry standards to protect your data."
//             shape="football-yellow.svg"
//           />
//         </motion.div>

//         {/* Shape 7 */}
//         <motion.div
//           style={{ opacity: shape4Opacity, scale: shape4Scale }}
//           className="absolute w-72 h-72"
//         >
//           <img
//             src="football.png"
//             alt="Shape 4"
//             className="w-full h-full object-contain"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Insightxscroll;

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CardInsightX from "@/components/custom/CardInsightX";

const Insightxscroll = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Adjust all transforms to stay within 0-1 range for better compatibility
  // Card 1 transforms
  const card1Opacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.12, 0.15],
    [0, 1, 1, 0]
  );
  const card1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.2]);

  // Shape 1 transforms
  const shape1Opacity = useTransform(
    scrollYProgress,
    [0.12, 0.15, 0.21, 0.23],
    [0, 1, 1, 0]
  );
  const shape1Scale = useTransform(scrollYProgress, [0.15, 0.23], [1, 5]);

  // Card 2 transforms
  const card2Opacity = useTransform(
    scrollYProgress,
    [0.21, 0.23, 0.29, 0.31],
    [0, 1, 1, 0]
  );
  const card2Scale = useTransform(scrollYProgress, [0.23, 0.31], [1, 1.2]);

  // Shape 2 transforms
  const shape2Opacity = useTransform(
    scrollYProgress,
    [0.29, 0.31, 0.37, 0.39],
    [0, 1, 1, 0]
  );
  const shape2Scale = useTransform(scrollYProgress, [0.31, 0.39], [1, 5]);

  // Card 3 transforms
  const card3Opacity = useTransform(
    scrollYProgress,
    [0.37, 0.39, 0.45, 0.47],
    [0, 1, 1, 0]
  );
  const card3Scale = useTransform(scrollYProgress, [0.39, 0.47], [1, 1.2]);

  // Shape 3 transforms
  const shape3Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.47, 0.53, 0.55],
    [0, 1, 1, 0]
  );
  const shape3Scale = useTransform(scrollYProgress, [0.47, 0.55], [1, 5]);

  // Card 4 transforms
  const card4Opacity = useTransform(
    scrollYProgress,
    [0.53, 0.55, 0.61, 0.63],
    [0, 1, 1, 0]
  );
  const card4Scale = useTransform(scrollYProgress, [0.55, 0.63], [1, 1.2]);

  // Shape 4 transforms
  const shape4Opacity = useTransform(
    scrollYProgress,
    [0.61, 0.63, 0.69, 0.71],
    [0, 1, 1, 0]
  );
  const shape4Scale = useTransform(scrollYProgress, [0.63, 0.71], [1, 3]);

  // Card 5 transforms - keeping all values under 1.0
  const card5Opacity = useTransform(
    scrollYProgress,
    [0.69, 0.71, 0.77, 0.79],
    [0, 1, 1, 0]
  );
  const card5Scale = useTransform(scrollYProgress, [0.71, 0.79], [1, 1.2]);

  // Shape 5 transforms
  const shape5Opacity = useTransform(
    scrollYProgress,
    [0.77, 0.79, 0.85, 0.87],
    [0, 1, 1, 0]
  );
  const shape5Scale = useTransform(scrollYProgress, [0.79, 0.87], [1, 5]);

  // Card 6 transforms
  const card6Opacity = useTransform(
    scrollYProgress,
    [0.85, 0.87, 0.93, 0.95],
    [0, 1, 1, 0]
  );
  const card6Scale = useTransform(scrollYProgress, [0.87, 0.95], [1, 1.2]);

  // Shape 6 transforms
  const shape6Opacity = useTransform(
    scrollYProgress,
    [0.93, 0.95, 0.97, 0.99],
    [0, 1, 1, 0]
  );
  const shape6Scale = useTransform(scrollYProgress, [0.95, 0.99], [1, 5]);

  // Card 7 transforms - using the final part of the scroll
  const card7Opacity = useTransform(
    scrollYProgress,
    [0.97, 0.99, 0.995, 1.0],
    [0, 1, 1, 0]
  );
  const card7Scale = useTransform(scrollYProgress, [0.99, 1.0], [1, 1.2]);

  return (
    <div ref={container} className="relative" style={{ height: "700vh" }}>
      <div className="sticky top-0 overflow-hidden h-screen flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Card 1 */}
          <motion.div
            style={{ opacity: card1Opacity, scale: card1Scale }}
            className="absolute w-full max-w-lg"
          >
            <CardInsightX
              title="Seamless Integration"
              description="Connects with multiple media publishers, data platforms, and all available public and private APIs to fetch granular, segment-level data."
              shape="circle-yellow.svg"
              shapePosition="bottom"
            />
          </motion.div>

          {/* Shape 1 */}
          <motion.div
            style={{ opacity: shape1Opacity, scale: shape1Scale }}
            className="absolute w-72 h-72"
          >
            <img
              src="circle.png"
              alt="Shape 1"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{ opacity: card2Opacity, scale: card2Scale }}
            className="absolute w-full max-w-lg"
          >
            <CardInsightX
              title="Custom Audience Segmentation"
              description="Delivers tailor-made audience segments designed specifically to meet advertiser needs, ensuring maximum campaign relevance."
              shape="bars-yellow.svg"
            />
          </motion.div>

          {/* Shape 2 */}
          <motion.div
            style={{ opacity: shape2Opacity, scale: shape2Scale }}
            className="absolute w-72 h-72"
          >
            <img
              src="bars.png"
              alt="Shape 2"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            style={{ opacity: card3Opacity, scale: card3Scale }}
            className="absolute w-full max-w-lg"
          >
            <CardInsightX
              title="Deterministic Segments"
              description="Provides precise, deterministic audience segments with unique identifiers for direct activation across marketing platforms."
              shape="hexagonal-yellow.svg"
            />
          </motion.div>

          {/* Shape 3 */}
          <motion.div
            style={{ opacity: shape3Opacity, scale: shape3Scale }}
            className="absolute w-72 h-72"
          >
            <img
              src="hexagonal.png"
              alt="Shape 3"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div
            style={{ opacity: card4Opacity, scale: card4Scale }}
            className="absolute w-full max-w-lg"
          >
            <CardInsightX
              title="Privacy-First Approach"
              description="Builds audience segments without accessing any personally identifiable information (PII), ensuring data privacy and compliance."
              shape="football-yellow.svg"
            />
          </motion.div>

          {/* Shape 4 */}
          <motion.div
            style={{ opacity: shape4Opacity, scale: shape4Scale }}
            className="absolute w-72 h-72"
          >
            <img
              src="football.png"
              alt="Shape 4"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Card 5 */}
          <motion.div
            style={{ opacity: card5Opacity, scale: card5Scale }}
            className="absolute w-full max-w-lg"
          >
            <CardInsightX
              title="Cross-Platform Campaign Activation"
              description="Enables seamless activation of marketing campaigns across the open web, enhancing reach and efficiency."
              shape="sphere-yellow.svg"
            />
          </motion.div>

          {/* Shape 5 */}
          <motion.div
            style={{ opacity: shape5Opacity, scale: shape5Scale }}
            className="absolute w-72 h-72"
          >
            <img
              src="sphere.png"
              alt="Shape 5"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Card 6 */}
          <motion.div
            style={{ opacity: card6Opacity, scale: card6Scale }}
            className="absolute w-full max-w-lg"
          >
            <CardInsightX
              title="Data-Driven Precision"
              description="Leverages advanced data integrations and segmentation techniques to ensure highly targeted and effective marketing strategies."
              shape="circle-yellow.svg"
            />
          </motion.div>

          {/* Shape 6 */}
          <motion.div
            style={{ opacity: shape6Opacity, scale: shape6Scale }}
            className="absolute w-72 h-72"
          >
            <img
              src="circle.png"
              alt="Shape 6"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Card 7 */}
          <motion.div
            style={{ opacity: card7Opacity, scale: card7Scale }}
            className="absolute w-full max-w-lg"
          >
            <CardInsightX
              title="Scalable Solutions"
              description="Offers flexible and scalable segmentation capabilities to support diverse advertiser requirements, from small campaigns to enterprise-scale initiatives."
              shape="bars-yellow.svg"
            />
          </motion.div>

          {/* Shape 7 - was missing in your original code */}
        </div>
      </div>
    </div>
  );
};

export default Insightxscroll;
