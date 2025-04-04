type Card = {
  imageSrc: string;
  title: string;
  description: string;
  titleColor: string;
};

export const CardSecond = ({
  imageSrc,
  title,
  description,
  titleColor,
}: Card) => {
  return (
    <div
      className="bg-black shadow-lg rounded-lg p-4 sm:p-6 flex flex-col items-start w-full h-full min-h-[280px] sm:min-h-[309px]"
      style={{ borderRadius: "8px" }}
    >
      {/* Icon */}
      <img
        src={imageSrc}
        alt={title}
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-0 mt-4 sm:mt-8"
      />

      {/* Title */}
      <h3
        className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2"
        style={{ color: titleColor }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-white text-sm sm:text-base leading-tight">
        {description.split(" ").map((word, index) => {
          if (
            title === "Expertise" &&
            (word === "seasoned" || word === "professionals")
          ) {
            return (
              <span key={index} style={{ color: titleColor }}>
                {word}{" "}
              </span>
            );
          }
          if (
            title === "Innovation" &&
            (word === "leveraging" ||
              word === "latest" ||
              word === "technologies" ||
              word === "trends")
          ) {
            return (
              <span key={index} style={{ color: titleColor }}>
                {word}{" "}
              </span>
            );
          }
          if (
            title === "Transparency" &&
            (word === "clear" ||
              word === "insights" ||
              word === "into" ||
              word === "the" ||
              word === "performance" ||
              word === "of" ||
              word === "your" ||
              word === "campaigns.")
          ) {
            return (
              <span key={index} style={{ color: titleColor }}>
                {word}{" "}
              </span>
            );
          }
          return <span key={index}>{word} </span>;
        })}
      </p>
    </div>
  );
};
