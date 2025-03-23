const UseCasesLayout = () => {
  // Sample case study data
  const caseStudies = [
    {
      id: 1,
      category: "Travel & Aviation",
      title: "Delivered 15% more reach",
      description:
        "Build brand awareness around colleges and universities for a student campaign",
      details:
        "Targeted top 1000 colleges and universities ranked on National Institutional Ranking Framework by ministry of education Latitude and longitude. Adopted the existing Standard banners into rich media innovations.",
      image: "/Object7.jpg", // Replace with your actual image path
    },
    {
      id: 2,
      category: "Electronic consumer goods",
      title: "",
      description: "",
      details: "",
      image: "/Object6.jpg", // Replace with your actual image path
    },
  ];

  // Background style
  const backgroundStyle = {
    background:
      "linear-gradient(180deg, #443E3E 0%, #090000 45.77%, #090000 97.18%)",
  };

  return (
    <div className="w-full bg-black p-8 text-white" style={backgroundStyle}>
      {/* Main heading */}
      <h2 className="text-4xl font-bold text-center mb-12">Use cases</h2>

      {/* Case studies grid */}
      <div className="flex justify-between  ">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id} className="relative">
            {/* Category heading */}
            <h3 className="text-2xl font-bold mb-2">{caseStudy.category}</h3>

            {/* Smaller description below category */}
            {caseStudy.description && (
              <p className="text-sm text-gray-300 mb-4">
                {caseStudy.description}
              </p>
            )}

            {/* Main image container - fixed height, vertical format */}
            <div className="relative rounded-lg overflow-hidden h-80 bg-black">
              <img
                src={caseStudy.image}
                alt={caseStudy.category}
                className="w-full h-full object-contain"
              />

              {/* Highlight box with result */}
              {caseStudy.title && (
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 border-2 border-blue-500 p-4 rounded-md max-w-48">
                  <p className="text-red-500 font-bold text-xl">
                    {caseStudy.title}
                  </p>
                </div>
              )}
            </div>

            {/* Details text */}
            {caseStudy.details && (
              <p className="text-xs text-gray-300 mt-2">{caseStudy.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCasesLayout;
