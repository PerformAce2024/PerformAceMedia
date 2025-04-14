import React, { useRef, useEffect, useState } from "react";

// Type definition for Card
type Card = {
  title: string;
  path: string;
};

// Props interface for InfiniteCarousel component
interface InfiniteCarouselProps {
  cardData: Card[];
  speed?: number; // Speed of movement in pixels per second
}

// Custom gradient background style
const CUSTOM_GRADIENT_STYLE = {
  background:
    "linear-gradient(180deg, #443E3E 0%, #090000 45.77%, #090000 97.18%)",
};

// InfiniteCarousel Component
const GradientCards: React.FC<InfiniteCarouselProps> = ({
  cardData,
  speed = 50, // Default speed
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplicate cards to create infinite scroll
    if (cardData.length > 0) {
      const doubledCards = [...cardData, ...cardData];
      setCards(doubledCards);
    }
  }, [cardData]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || cards.length === 0) return;

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      // Move the carousel
      position -= speed / 60; // Adjust speed for 60fps

      // Check if we've moved past the first set of cards
      const firstSetWidth = carousel.children[0].clientWidth * cardData.length;
      if (Math.abs(position) >= firstSetWidth) {
        position = 0;
      }

      // Apply the translation
      carousel.style.transform = `translateX(${position}px)`;

      // Continue the animation
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [cards, cardData.length, speed]);

  return (
    <div className="w-full bg-primary p-2 sm:p-4 overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-2 sm:gap-4 pb-2 sm:pb-4 transition-transform duration-0"
        style={{
          width: "max-content",
          willChange: "transform",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-40 sm:min-w-48 h-48 sm:h-56 rounded-lg p-3 sm:p-4 flex flex-col justify-between shrink-0"
            style={CUSTOM_GRADIENT_STYLE}
          >
            <h3 className="text-white font-bold text-sm sm:text-base mb-1 truncate">
              {card.title}
            </h3>

            <div className="flex justify-center items-center flex-grow">
              <img
                src={card.path}
                alt={`Illustration for ${card.title}`}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientCards;
