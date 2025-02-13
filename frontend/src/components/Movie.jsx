import { useEffect } from "react";

const MovieAd = () => {
  useEffect(() => {
    // Core animation functionality
    const startAd = () => {
      const mainWrapper = document.querySelector(".mainwrapper");
      mainWrapper.style.display = "block";

      // Start animations
      startMCanvas();
    };

    const startMCanvas = () => {
      const query = document.querySelector.bind(window.document);

      setTimeout(() => {
        query(".logo").style.display = "block";
        setTimeout(() => {
          query(".txt2").style.display = "block";
          setTimeout(() => {
            query(".cta").style.display = "block";
          }, 1000);
        }, 1000);
      }, 800);
    };

    // Initialize ad
    startAd();

    // Add click handlers
    const outboundUrl =
      "https://www.warnerbros-india.com/movies/shazam-fury-gods?campaign=mcanvas";

    document.querySelector(".outbound")?.addEventListener("click", (event) => {
      event.stopPropagation();
      window.open(outboundUrl, "_blank");
    });
  }, []);

  return (
    <div className="w-[321px] h-[580px] relative overflow-hidden bg-white">
      <div className="mainwrapper hidden">
        <div className="img absolute top-10 w-full h-full bg-cover object-fill">
          <div className="logo hidden w-[71%] absolute top-1/4 left-[15%] transform scale-0 animate-scale">
            <span className="block pb-[55%]"></span>
            <img src="/movie/logo.png"></img>
          </div>
        </div>
        <div className="txt2 hidden w-[72%] absolute bottom-[14%]  left-5 transform -translate-x-[158%] animate-slideX">
          <span className="block pb-[10%]"></span>
          <img src="/movie/txt2.png"></img>
        </div>
        <div className="cta hidden w-[48%] absolute bottom-[5%] left-14 opacity-0 animate-fadeIn">
          <span className="block pb-[16%]"></span>
          <img src="/movie/cta.png"></img>
        </div>
        <div className="outbound absolute top-0 w-full h-full"></div>
        <img src="/movie/img.png"></img>
      </div>
    </div>
  );
};

export default MovieAd;
