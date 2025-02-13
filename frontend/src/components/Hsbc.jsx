import { useEffect, useState } from "react";

const HSBCAd = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start animation sequence after component mounts
    setAnimationStarted(true);
  }, []);

  const handleOutboundClick = () => {
    window.open(
      "https://www.accountopening.hsbc.co.in/credit-cards/#!/app/apply-for-credit-card?form.campaign_id=MKT_mCanvas&form.source=MCANVAS&WT.ac=NA&card=cbc&cid=INM:SS:D1:CC:05:2305:001:McanvasCC_MKT",
      "_blank"
    );
  };

  return (
    <div className="relative w-full h-[580px] bg-white overflow-hidden">
      {/* Ad Screen */}
      <div className="absolute inset-0">
        <img src="/hsbc/adscreen.png"></img>
        {/* Logo */}
        <div
          style={{ backgroundImage: `url("/hsbc/logo.png"})` }}
          className={`absolute top-[4%] left-[6%] w-[35%] opacity-0 
            ${animationStarted ? "animate-fadeIn" : ""}`}
        >
          <img
            src="./hsbc/logo.png"
            className="w-full h-auto object-contain"
          ></img>
        </div>

        {/* Card Wrap */}
        <div
          className={`absolute left-0 right-0 mx-auto w-[90%] transition-all duration-500 
            ${animationStarted ? "top-[20%]" : "top-[50%] -translate-y-1/2"}`}
        >
          {/* Card Shape */}
          {animationStarted && (
            <div className="absolute top-0 w-full opacity-0 scale-0 animate-bounceIn">
              <img
                src="/hsbc/cardshape.png"
                className="w-full h-auto object-contain"
              ></img>
            </div>
          )}

          {/* Card */}
          {animationStarted && (
            <div className="absolute top-5 w-[56%] left-0 right-0 mx-auto animate-scale">
              <img
                src="/hsbc/card.png"
                className="w-full h-auto object-contain"
              ></img>
            </div>
          )}
        </div>

        {/* Slide Text 1 */}
        {animationStarted && (
          <div
            className="absolute bottom-[32%] w-[68%] left-0 right-0 mx-auto opacity-0 translate-x-full animate-slideX"
            style={{ animationDelay: "1.5s" }}
          >
            <img src="/hsbc/slide-txt1.png"></img>
          </div>
        )}

        {/* Slide Text 2 */}
        {animationStarted && (
          <div
            className="absolute bottom-[20%] w-[75%] left-0 right-0 mx-auto opacity-0 -translate-x-full animate-slideX"
            style={{ animationDelay: "1.75s" }}
          >
            <img src="/hsbc/slide-txt2.png"></img>
          </div>
        )}

        {/* Bottom Text */}
        <div
          className={`absolute top-[52%] w-[75%] left-0 right-0 mx-auto opacity-0
            ${animationStarted ? "animate-fadeIn" : ""}`}
          style={{ animationDelay: "2s" }}
        >
          <img src="/hsbc/btm-txt.png"></img>
        </div>

        {/* CTA Primary */}
        <div className="absolute bottom-[10%] w-[40%] left-0 right-0 mx-auto">
          <img src="/hsbc/cta1.png"></img>
        </div>

        {/* CTA Secondary (Blinking) */}
        {animationStarted && (
          <div className="absolute bottom-[10%] w-[40%] left-0 right-0 mx-auto animate-blink">
            <img src="/hsbc/cta2.png"></img>
          </div>
        )}

        {/* TnC */}
        <div
          className={`absolute bottom-[2%] right-[3%] w-[129px] h-[9px] opacity-0
            ${animationStarted ? "animate-fadeIn" : ""}`}
          style={{ animationDelay: "2.25s" }}
        >
          {" "}
          <img src="/hsbc/tnc.png"></img>
        </div>

        {/* Outbound Click Area */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={handleOutboundClick}
          aria-label="Learn More"
        />
      </div>
    </div>
  );
};

export default HSBCAd;
