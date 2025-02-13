import { useEffect, useState } from "react";

const AmazonMiniTv = () => {
  const [isStarted, setIsStarted] = useState(false);
  const outboundUrl =
    "https://ad.doubleclick.net/ddm/trackclk/N743069.3724511MCANVAS.COM/B30230162.370692353;dc_trk_aid=561798397;dc_trk_cid=195027153;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1";

  useEffect(() => {
    if (!isStarted) {
      setIsStarted(true);
      startAnimation();
    }
  }, [isStarted]);

  const startAnimation = () => {
    const img1 = document.querySelector(".ad-img");
    const txt1 = document.querySelector(".ad-txt1");
    const txt2 = document.querySelector(".ad-txt2");
    const txt21 = document.querySelector(".ad-txt2-1");

    setTimeout(() => {
      if (img1) img1.classList.remove("opacity-0");

      setTimeout(() => {
        if (txt1) txt1.classList.remove("translate-y-[-128%]", "opacity-0");
        if (txt2) txt2.classList.remove("translate-y-[110%]", "opacity-0");
        if (txt21) txt21.classList.remove("translate-y-[110%]", "opacity-0");

        setTimeout(() => {
          if (txt21) txt21.classList.add("animate-bounceIn");
        }, 1500);
      }, 1500);
    }, 500);
  };

  const handleOutboundClick = (event) => {
    event.stopPropagation();
    window.open(outboundUrl, "_blank");
  };

  return (
    <div className="absolute top-0 w-full h-full bg-white">
      <div className="ad-img absolute left-0 right-0 mx-auto w-[94%] top-[19%] opacity-0 transition-opacity duration-1000 ease-linear">
        <span className="block"></span>
        <img src="/amazonminitv/img1.png"></img>
      </div>

      <div className="ad-txt1 absolute left-0 right-0 mx-auto w-[56%] top-[3%] translate-y-[-128%] opacity-0 transition-all duration-1000 ease-linear">
        <span className="block"></span>
        <img src="/amazonminitv/txt1.png"></img>
      </div>

      <div className="ad-txt2 absolute left-0 right-0 mx-auto w-[66%] bottom-[2%] translate-y-[110%] opacity-0 transition-all duration-1000 ease-linear">
        <span className="block"></span>
        <img src="/amazonminitv/txt2.png"></img>
      </div>

      <div className="ad-txt2-1 absolute left-0 right-0 mx-auto w-[66%] bottom-[2%] translate-y-[110%] opacity-0 transition-all duration-1000 ease-linear">
        <span className="block"></span>
        <img src="/amazonminitv/txt2-1.png"></img>
      </div>

      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handleOutboundClick}
      ></div>
    </div>
  );
};

export default AmazonMiniTv;
