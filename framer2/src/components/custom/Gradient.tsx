type Card = {
  title: string;
  description: string;
  path: string;
};
interface GradientCardsProps {
  cardData: Card[];
}
const GradientCards: React.FC<GradientCardsProps> = ({ cardData }) => {
  const customGradientStyle = {
    background:
      "linear-gradient(180deg, #443E3E 0%, #090000 45.77%, #090000 97.18%)",
  };

  return (
    <div className="w-full bg-primary p-6 ">
      <div className="flex overflow-x-auto gap-4 pb-4 overflow-y-hidden">
        {cardData.map((card: Card, index: number) => (
          <div
            key={index}
            className="min-w-64 h-80 rounded-lg p-6 flex flex-col justify-between"
            style={customGradientStyle}
          >
            <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>

            {/* Image placeholder - center of card */}
            <div className="flex justify-center   ">
              <img
                src={`${card.path}`}
                alt="Card illustration"
                className="object-contain h-64 w-64"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientCards;
