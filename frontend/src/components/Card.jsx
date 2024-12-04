import PropTypes from "prop-types";

const Card = ({ imageSrc, title, description, titleColor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 w-[300px] h-[300px]">
      {/* Icon */}
      <img
        src={imageSrc}
        alt={title}
        className="w-12 h-12 object-contain"
        style={{ width: "50px", height: "50px" }}
      />

      {/* Title */}
      <h3 className="text-lg font-bold" style={{ color: titleColor }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

// Adding PropTypes validation
Card.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Ensures `imageSrc` is a required string
  title: PropTypes.string.isRequired,    // Ensures `title` is a required string
  description: PropTypes.string.isRequired, // Ensures `description` is a required string
  titleColor: PropTypes.string, // Ensures `titleColor` is an optional string
};

// Adding default props
// Card.defaultProps = {
//   titleColor: "#6B46C1", // Default title color if not provided (purple-600 in Tailwind)
// };

export default Card;
