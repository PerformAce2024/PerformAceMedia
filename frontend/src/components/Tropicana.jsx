import { useEffect, useState } from "react";

const TropicanaAd = () => {
  const [oneTime, setOneTime] = useState(true);

  const fadeoutAnim = (element, time) => {
    let op = 1;
    const timer = setInterval(() => {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
      }
      element.style.opacity = op;
      element.style.filter = `alpha(opacity=${op * 100})`;
      op -= op * 0.1;
    }, time);
  };

  const fadeinAnim = (element, time) => {
    let op = 0.1;
    element.style.display = "block";
    const timer = setInterval(() => {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = `alpha(opacity=${op * 100})`;
      op += op * 0.1;
    }, time);
  };

  const startmCanvas = () => {
    if (!oneTime) return false;
    setOneTime(false);

    setTimeout(() => {
      const txt1 = document.querySelector(".txt1");
      const cta = document.querySelector(".cta");
      const bg2 = document.querySelector(".bg2");

      if (txt1) fadeinAnim(txt1, 10);
      if (cta) fadeinAnim(cta, 10);
      if (bg2) bg2.style.display = "block";
    }, 500);

    setTimeout(() => {
      const txt1 = document.querySelector(".txt1");
      if (txt1) fadeoutAnim(txt1, 10);

      setTimeout(() => {
        const logo = document.querySelector(".logo");
        const txt3 = document.querySelector(".txt3");

        if (logo) logo.style.display = "block";
        if (txt3) fadeinAnim(txt3, 10);

        setTimeout(() => {
          const elements = [".icon1", ".icon2", ".icon3"].map((selector) =>
            document.querySelector(selector)
          );
          elements.forEach((el) => {
            if (el) el.style.display = "block";
          });

          setTimeout(() => {
            const txt4 = document.querySelector(".txt4");
            const bottle = document.querySelector(".bottle");

            if (txt4) txt4.style.display = "block";
            if (bottle) bottle.style.display = "block";
          }, 1000);
        }, 1000);
      }, 500);
    }, 4000);
  };

  useEffect(() => {
    startmCanvas();
  }, []);

  return (
    <div className="ad-screen relative w-full h-full ">
      <img src="/tropicana/adscreen.png"></img>
      <div className="bg2 hidden opacity-0 absolute top-0 w-full h-full animate-fadeIn" />
      <div className="logo hidden translate-y-[-100%] absolute left-0 right-0 mx-auto w-1/2 animate-slideY opacity-0">
        <span className="block pt-[60%]" />
        <img src="/tropicana/logo.png" className="w-full h-auto"></img>
      </div>
      <div className="txt1 hidden opacity-0 absolute top-[20%] w-[80%] h-[20%] left-0 right-0 mx-auto">
        <img src="/tropicana/txt1.png"></img>
      </div>
      <div className="txt2 hidden opacity-0 absolute top-[20%] w-[80%] h-[30%] left-0 right-0 mx-auto">
        <img src="/tropicana/txt2.png"></img>
      </div>
      <div className="txt3 hidden opacity-0 absolute top-[19%] w-[90%] h-[20%] left-0 right-0 mx-auto">
        <img src="/tropicana/txt3.png"></img>
      </div>

      <div className="icons absolute w-[90%] h-[20%] top-[30%] left-0 right-0 mx-auto flex justify-evenly">
        <div className="icon1 hidden w-[31%] h-full animate-bounceIn">
          <img src="/tropicana/icon1.png"></img>
        </div>
        <div className="icon2 hidden w-[31%] h-full animate-bounceIn delay-500">
          <img src="/tropicana/icon2.png"></img>
        </div>
        <div className="icon3 hidden w-[31%] h-full animate-bounceIn delay-1000">
          <img src="/tropicana/icon3.png"></img>
        </div>
      </div>

      <div className="img absolute bottom-[15%] w-[60%]  animate-fadeIn left-0 right-0 mx-auto">
        <span className="block pt-[120%]" />
        <img src="/tropicana/img.png"></img>
      </div>

      <div className="footer absolute bottom-0 w-full">
        <div className="txt4 hidden opacity-0 absolute top-[65%] w-[55%] left-[5px] translate-x-[-120%] animate-slideX">
          <img src="/tropicana/txt4.png"></img>
        </div>
        <div className="bottle hidden opacity-0 w-[45%] h-[110%] absolute right-0 top-[28%] translate-x-[100%] animate-slideX">
          <img src="/tropicana/bottle.png"></img>
        </div>
        <div className="cta hidden opacity-0 h-[45px] bg-[#f7911d] bg-[length:40%] absolute pl-7 pt-2 bottom-0 w-full bg-center">
          <img src="./tropicana/cta.png"></img>{" "}
        </div>
        <span className="block pt-[43%]" />
        <img src="/tropicana/footer.png"></img>
      </div>

      <div className="outbound absolute top-0 w-full h-full" />
    </div>
  );
};

export default TropicanaAd;
