import { motion } from "motion/react";

interface CardProps {
  title: string;
  image: string;
  index: number;
}

// Modified Card component that works with AnimatePresence
export function Card({ title, image, index }: CardProps) {
  return (
    <motion.div
      className="relative p-6 text-secondary w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Index behind title */}
      <h1 className="absolute top-0 left-0 text-[60px] font-bold text-secondary opacity-20">
        {index < 10 ? `0${index}` : index}
      </h1>

      {/* Title */}
      <h2 className="relative text-xl font-semibold">{title}</h2>

      <div className="mt-4 aspect-square max-w-xs mx-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
}
