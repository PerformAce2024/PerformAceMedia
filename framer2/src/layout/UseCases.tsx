type CaseStudy = {
  id: number;
  image: string;
};

type UseCasesLayoutProps = {
  caseStudies: CaseStudy[];
};
const UseCasesLayout = ({ caseStudies }: UseCasesLayoutProps) => {
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
      <div className="flex justify-evenly">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id} className="relative">
            {/* Category heading */}

            {/* Smaller description below category */}

            {/* Main image container - fixed height, vertical format */}
            <div className="relative rounded-lg overflow-hidden h-80 bg-black">
              <img
                src={caseStudy.image}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCasesLayout;
