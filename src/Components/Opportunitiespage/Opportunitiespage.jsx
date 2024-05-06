import React from "react";
import "./Opportunitiespage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons/faBorderAll";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Opportunitiespage() {
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
        adaptiveHeight: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
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
    <div className="themainopprtuniespageprntdiv pt-10 pb-12">
      <div className="container prntforthelowerdivofthemainopprtu p-9 ">
      <motion.div
          initial={{ opacity: 0 }} // Initial state (opacity 0)
          animate={{ opacity: inView ? 1 : 0 }}// Animation state (opacity 1)
          transition={{ duration: 1 }} // Animation duration (in seconds)
          ref={ref} className={`download-app-container  ${inView ? 'animated' : ''}`}
        >
        <div className=" slider-container">
          <Slider {...settings}>
            <div className="theleftandthecoptyofrightalso ">
              <div className="justfortheajustment "></div>
              <div className="thelowerwhichismainwithpad flex flex-col p-10 ">
                <h3 className="theupperofthetheopprtuniesh3 mb-2">
                  I want to learn!
                </h3>
                <h4 className="theupperofthetheopprtuniesh4 mb-4">
                  {" "}
                  Skill Courses{" "}
                </h4>
                <img
                  src="./lerncousre.svg"
                  alt="thebelow"
                  className="theimageundertheh4"
                />
                <div className="thelowerforthebottomoneopp pb-5 flex gap-2 items-center">
                  <FontAwesomeIcon icon={faBorderAll} />
                  <input
                    type="text"
                    placeholder="Select Interest Area"
                    className="anyinputofselect pb-1 pt-1"
                  />
                  <FontAwesomeIcon icon={faSearch} />
                </div>

                <p className="theloweranythetextoftheop mb-3">
                  {" "}
                  Interest areas like Automotive, Electronics etc.{" "}
                </p>
                <div className=" flex-grow anyonttany flex">
                  <button
                    title="Register"
                    className="Registerbutton justrml px-3 py-2"
                  >
                    FIND SKILL COURSES
                  </button>
                </div>
              </div>
            </div>
            <div className="theleftandthecoptyofrightalso">
              <div className="justfortheajustment"></div>
              <div className="thelowerwhichismainwithpad flex flex-col p-10 ">
                <h3 className="theupperofthetheopprtuniesh3 mb-2">
                  I want to Explore!
                </h3>
                <h4 className="theupperofthetheopprtuniesh4 mb-4">
                  {" "}
                  Job Exchange{" "}
                </h4>
                <img
                  src="./explorejob.svg"
                  alt="thebelow"
                  className="theimageundertheh4"
                />
                <div className="thelowerforthebottomoneopp pb-5 flex  gap-2 items-center">
                  <FontAwesomeIcon icon={faBorderAll} />
                  <input
                    type="text"
                    placeholder="Select Interest Area"
                    className="anyinputofselect w-9/12 pb-1 pt-1"
                  />
                  <FontAwesomeIcon icon={faSearch} />
                </div>

                <p className="theloweranythetextoftheop mb-3">
                  Opportunities for Job Exchange, Apprenticeship and
                  Entrepreneurship
                </p>
                <div className=" flex-grow anyonttany flex">
                <button title="Register" className="Registerbutton px-3 py-2 ">
                  Explore Job Exchange
                </button>
                </div>
              </div>
            </div>
            <div className="theleftandthecoptyofrightalso">
              <div className="thedifferentoftheother flex justify-end">
                <button className="theultimatebuttonforexplorethe">
                  <div className="thebackgroundtheoftheworld">
                    <FontAwesomeIcon icon={faGlobe} color="#df6e12" />
                  </div>
                  <span className="wecanhaveitforthebluespan">
                    Opportunities near you
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} color="#df6e12" />
                </button>
              </div>
              <div className="thelowerwhichismainwithpad flex flex-col p-10 therelayoneforthe ">
                <h4 className="thebiggeroneforthett mb-5">
                  {" "}
                  Not sure where to begin?{" "}
                </h4>
                <h4 className="anotherh4becausewohthe mb-10">
                  Answer a few simple questions and we will help you.{" "}
                </h4>
                <h3 className="theh3fortheh4below2h mb-5">
                  {" "}
                  What is your highest education level?{" "}
                </h3>

                <div className="theotherdivfortheselectprntdiv flex gap-1 w-full p-3 justify-between items-center mb-11">
                  <p className="theleftfortheslect">Select education</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="thefotteroftheservicesasside flex justify-between items-center w-full">
                  <p className="ontheleft1by5">1/5</p>
                  <button
                    title="Register"
                    className="Registerbutton wecantheotherbuttonforblue px-3 py-2 "
                  >
                    Register
                  </button>
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
