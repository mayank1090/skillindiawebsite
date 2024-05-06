import React from "react";
import "./SkilledIndiamain.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function SkilledIndiamain() {
  const { ref, inView } = useInView({ threshold: 0 });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <div className="Skilledindiamainprnt pt-8 pb-10 flex justify-center">
      <div className="container">
        <h2 className="wecanhavethemainupperhead text-center mb-8">
          {" "}
          Building a Skilled India{" "}
        </h2>
        <motion.div
          initial={{ opacity: 0 }} // Initial state (opacity 0)
          animate={{ opacity: inView ? 1 : 0 }}// Animation state (opacity 1)
          transition={{ duration: 1 }} // Animation duration (in seconds)
          ref={ref} className={`download-app-container  ${inView ? 'animated' : ''}`}
        >
        <div className=" slider-container ">
          <Slider {...settings}>
            <div className="thebelowskilledindiamianonepart py-4">
              <div className="imageprntfortheskillediniaone">
                <img
                  src="./citizen.svg"
                  alt="theupskillcourses"
                  className="thelowersupksiiiimage w-full"
                />
              </div>
              <h3 className="thelowerbelowimageofconetctt">Citizen Centric</h3>
              <p className="lowersmalltextbelowimageandtext">
                Designed to meet the skilling needs of India’s diverse and
                aspirational population
              </p>
            </div>

            <div className="thebelowskilledindiamianonepart py-4">
              <div className="imageprntfortheskillediniaone">
                <img
                  src="./career.svg"
                  alt="theupskillcourses"
                  className="thelowersupksiiiimage w-full"
                />
              </div>
              <h3 className="thelowerbelowimageofconetctt">Career Focussed</h3>
              <p className="lowersmalltextbelowimageandtext">
                Relevant skill courses, certification, jobs and apprenticeships
              </p>
            </div>

            <div className="thebelowskilledindiamianonepart py-4">
              <div className="imageprntfortheskillediniaone">
                <img
                  src="./multilingual.svg"
                  alt="theupskillcourses"
                  className="thelowersupksiiiimage w-full"
                />
              </div>
              <h3 className="thelowerbelowimageofconetctt">Multilingual</h3>
              <p className="lowersmalltextbelowimageandtext">
                Explore Skill India Digital Hub in Multiple Indian languages
              </p>
            </div>
          </Slider>
        </div>
        </motion.div>

        <div className="thelowestpartoftheskilledinprnt pt-6 flex justify-center">
          <button title="Register" className="Registerbutton px-3 py-2 ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
