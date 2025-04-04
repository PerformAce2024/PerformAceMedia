import Footer from "@/layout/Footer";
import Insightxscroll from "@/layout/Insightxscroll";

import ScrollAnimation from "@/layout/scroll";

export default function InsightX() {
  return (
    <>
      <main className="bg-primary h-screen">
        <div className="relative w-full h-screen">
          <img
            src="/InsightXCover.png"
            alt="Black spheres with one red sphere standing out"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col font-bold items-center justify-center text-secondary">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2">InsightX</h2>
              <h2 className="text-3xl md:text-4xl font mb-8">
                segmentation is
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-accent mb-12">
                Deterministic
              </h1>
            </div>

            <button className="bg-accent hover:bg-accent text-primary font-bold py-3 px-12 rounded-full">
              Challenge US
            </button>
          </div>
        </div>
        <ScrollAnimation />
        <Insightxscroll />
        <Footer />
      </main>
    </>
  );
}
