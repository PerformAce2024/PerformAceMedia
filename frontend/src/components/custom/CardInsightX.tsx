type CardInsightX = {
  title: string;
  description: string;
  shape: string;
  shapePosition?: "bottom" | "bottom-right";
};

export default function CardInsightX({
  title,
  description,
  shape,
  shapePosition = "bottom-right",
}: CardInsightX) {
  return (
    <div className="flex justify-center">
      <div className="relative bg-gradient-to-b from-gray-800 to-primary rounded-3xl p-10 h-60 w-60 md:h-96 md:w-96 text-white text-center shadow-lg overflow-clip">
        {/* Title Section */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-xl md:text-4xl font-normal leading-tight">
            {title.split(" ")[0]} <br /> {title.split(" ").slice(1).join(" ")}
          </h2>
        </div>

        {/* Description */}
        <p className="mt-2 md:mt-4 text-xs md:text-xl text-gray-300 text-left">
          {description}
        </p>

        {/* Shape Image */}
        <div
          className={`absolute ${
            shapePosition === "bottom"
              ? "bottom-0 left-1/2 transform -translate-x-1/2"
              : "bottom-0 right-0 transform translate-x-1/4 translate-y-1/4"
          } w-32 sm:w-48 md:w-72`}
        >
          <img
            src={shape}
            alt="decorative shape"
            className="opacity-80 w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
}
