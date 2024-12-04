import PropTypes from "prop-types";

const Card = ({ title, description, buttonText, imageSrc, isSecondCard, isFourthCard }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center space-y-6 w-[600px] h-[600px]">
      <h2 className="text-[36px] font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 text-[16px] leading-relaxed">{description}</p>
      <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-all h-[54px] w-[180px]">
        {buttonText}
      </button>
      <img
        src={imageSrc}
        alt={title}
        className={`w-400 h-400 object-contain mt-4 ${
          isSecondCard || isFourthCard ? "max-h-[320px] scale-80 " : ""
        }`}
      />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  buttonText: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  isSecondCard: PropTypes.bool,
  isFourthCard: PropTypes.bool
};

Card.defaultProps = {
  isSecondCard: false,
  isFourthCard: false
};

export default Card;