import GradientCards from "@/components/custom/Gradient";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Footer from "@/layout/Footer";
import UseCasesLayout from "@/layout/UseCases";

export default function NativeHub() {
  const cardData = [
    {
      title: "Unified Native Advertising",
      path: "/NativeHub1.svg",
    },
    {
      title: "Reduced Duplication, Increased Efficiency",
      path: "/NativeHub6.svg",
    },
    {
      title: "Interest and Behavioural Targeting",
      path: "/NativeHub2.svg",
    },
    {
      title: "Cost-Effective Campaigns",
      path: "/NativeHub3.svg",
    },
    {
      title: "Creative Flexibility",
      path: "/NativeHub4.svg",
    },
    {
      title: "Smart Optimisation and real time data",
      path: "NativeHub5.svg",
    },
  ];

  const steps = [
    { number: "01", text: "Campaign optimization across top publishers" },
    { number: "02", text: "Cost-effective, CPC-driven native traffic" },
    {
      number: "03",
      text: "Smart data-driven bidding & placement",
    },
    {
      number: "04",
      text: "Dynamic ad creatives that blend into content environments",
    },
  ];
  const caseStudies = [
    {
      id: 1,
      image: "/usecase1.png",
    },
    {
      id: 2,
      image: "/usecase2.png",
    },
  ];
  return (
    <main className="bg-primary text-white w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-black min-h-screen">
        {/* Image as background with absolute positioning */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="NativeHubCover1.svg"
            alt="NativeHub"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content positioned over the image */}
        <div className="relative z-10 w-full h-full flex flex-col items-center px-6 sm:px-12 py-50">
          <h1 className="text-5xl sm:text-6xl lg:text-9xl font-bold text-white mb-4 sm:mb-6">
            NativeHub
          </h1>
          <p className="text-lg sm:text-xl text-center lg:text-2xl text-white font-normal max-w-xl">
            Deliver high-value clicks and conversions through seamless,
            intelligent native advertising.
          </p>
        </div>
      </section>
      <CardSpotlight color="#ef4444">
        <div className="bg-black text-white p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">
            How NativeHub <br></br> Works
          </h2>

          <div className="flex flex-col items-start gap-6 sm:gap-8">
            {steps.map((step) => {
              // Split the text by space to get the first word
              const words = step.text.split(" ");
              const firstWord = words[0];
              const restOfText = words.slice(1).join(" ");

              return (
                <div key={step.number} className="flex items-center w-full">
                  <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[200px] font-bold text-gray-800 leading-none mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12">
                    {step.number}
                  </div>
                  <div className="pt-2 flex-1">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                      <span className="text-red-600 font-bold">
                        {firstWord}
                      </span>
                      {" " + restOfText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardSpotlight>

      {/* Additional Sections */}
      <GradientCards cardData={cardData} />
      <UseCasesLayout caseStudies={caseStudies} />
      <Footer />
    </main>
  );
}
