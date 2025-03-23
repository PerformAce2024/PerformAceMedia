const GradientCards = () => {
  // Sample card data - this can be replaced with your actual data
  const cardData = [
    {
      title: "Precise targeting",
      description: "Identify ideal customer segments with data-driven insights",
      path: "/Object1.svg",
    },
    {
      title: "Media landscape optimisation",
      description:
        "Strategic placement across digital and traditional channels",
      path: "/Object2.svg",
    },
    {
      title: "Better brand recall through creative innovations",
      description: "Memorable campaigns that resonate with your audience",
      path: "/Object3.svg",
    },
    {
      title: "Focused towards brand goals",
      description: "Align marketing efforts with core business objectives",
      path: "/Object4.svg",
    },
    {
      title: "Optimize ROI: pinpoint audience, choose media, refine bids",
      description:
        "Maximize return on marketing investment with strategic allocation",
      path: "/Object5.svg",
    },
  ];

  const customGradientStyle = {
    background:
      "linear-gradient(180deg, #443E3E 0%, #090000 45.77%, #090000 97.18%)",
  };

  return (
    <div className="w-full bg-primary p-6 ">
      <div className="flex overflow-x-auto gap-4 pb-4 overflow-y-hidden">
        {cardData.map((card, index) => (
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
