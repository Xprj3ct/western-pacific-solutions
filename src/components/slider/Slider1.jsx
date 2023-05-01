import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { sliderData } from "../../slider-data";
import "./Slider.css";
// import TypeWriterEffect from 'react-typewriter-effect';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img
                  src={slide.image}
                  alt="slide"
                  className=" md:h-[100vh] object-cover md:object-fill"
                />
                <div className="content flex h-full justify-center w-full items-center flex-col py-28">
                  <div className="mx-auto max-w-[1600px] w-full items-center md:px-10 px-4">
                    <h1 className="text-white flex md:w-[60%] md:text-4xl text-4xl font-bold tracking-wider">
                      {slide.heading}
                    </h1>
                    <p className="md:text-2xl font-semibold md:w-[60%] py-4">
                      {slide.desc}
                    </p>
                    <div className="flex md:gap-10">
                      <BsArrowLeft
                        className="arrow prev fill-white text-white"
                        onClick={prevSlide}
                      />
                      <BsArrowRight
                        className="arrow next fill-white text-white"
                        onClick={nextSlide}
                      />
                    </div>
                  </div>
                </div>
              </div>
              //               <section
              //   className="h-[80vh] w-[90%] mb-10 drop-shadow-1"
              //   id="image-set-landing"
              //   data-aos="slide-right"
              // >
              //   <div className="flex flex-col h-full md:w-[60vw] mx-auto items-center justify-center text-center px-5">
              //     <h1
              //       className="text-white text-center font-bold md:text-6xl text-3xl py-4"
              //       data-aos="slide-right"
              //     >
              //       <TypeWriterEffect
              //         textStyle={{
              //           fontFamily: "Montserrat, sans-serif",
              //           color: "#ffff",
              //           textAlign: "center",
              //           fontWeight: 700,
              //           display: "block",
              //         }}
              //         startDelay={3000}
              //         cursorColor="#ffff"
              //         multiText={[{{slide.heading}}]}
              //         multiTextDelay={2000}
              //         typeSpeed={60}
              //       />
              //     </h1>
              //     <h2
              //       className="text-white text-center font-semibold md:text-4xl text-xl"
              //       data-aos="zoom-in"
              //     >
              //       Fastest-Growing company dealing majorly with Marine Support
              //       Services, Waste Management Services and Engineering Designs.
              //     </h2>
              //   </div>
              // </section>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
