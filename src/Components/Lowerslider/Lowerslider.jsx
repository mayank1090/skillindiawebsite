import React from "react";
import "./Lowersliders.css"
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Lowerslider() {
  const { ref, inView } = useInView({ threshold: 0 });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        adaptiveHeight: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,

            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="canhaveitforthelatssliders pt-11 pb-12 flex justify-center">
      <div className="container p-6">
      <motion.div
          initial={{ opacity: 0 }} // Initial state (opacity 0)
          animate={{ opacity: inView ? 1 : 0 }}// Animation state (opacity 1)
          transition={{ duration: 1 }} // Animation duration (in seconds)
          ref={ref} className={`download-app-container  ${inView ? 'animated' : ''}`}
        >
      <div className=" slider-container">
          <Slider {...settings}>
        <div className="theparentfortheflexoftheimageanftext">
          <div className="forjustghavingtheflex w-full flex justify-center">
            <img src="./learning.svg" alt="theleft" className="theleftimagforthelisderonly " />
            <div className="fortherightcontetntone flex flex-col justify-center ">
              <h2 className="fortheh2withleftmargin8">
                Start, change, upgrade your career
              </h2>
              <p className="thelowerofthegreytext">
                Find jobs and apprenticeships (on the job training)
              </p>
              <div>
              <button title="Register" className="Registerbutton px-3 py-2 ">
                LEARN MORE
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="theparentfortheflexoftheimageanftext">
          <div className="forjustghavingtheflex w-full flex justify-center">
            <img src="./learning.svg" alt="theleft" className="theleftimagforthelisderonly " />
            <div className="fortherightcontetntone flex flex-col justify-center ">
              <h2 className="fortheh2withleftmargin8">
                Start, change, upgrade your career
              </h2>
              <p className="thelowerofthegreytext">
                Find jobs and apprenticeships (on the job training)
              </p>
              <div>
              <button title="Register" className="Registerbutton px-3 py-2 ">
                LEARN MORE
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="theparentfortheflexoftheimageanftext">
          <div className="forjustghavingtheflex w-full flex justify-center">
            <img src="./learning.svg" alt="theleft" className="theleftimagforthelisderonly " />
            <div className="fortherightcontetntone flex flex-col justify-center ">
              <h2 className="fortheh2withleftmargin8">
                Start, change, upgrade your career
              </h2>
              <p className="thelowerofthegreytext">
                Find jobs and apprenticeships (on the job training)
              </p>
              <div>
              <button title="Register" className="Registerbutton px-3 py-2 ">
                LEARN MORE
              </button>
              </div>
            </div>
          </div>
        </div>
        </Slider>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
