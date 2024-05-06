import React from "react";
import "./Lowervideoslider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons/faCirclePlay";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Lowervideoslider() {
    const { ref, inView } = useInView({ threshold: 0 });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 0.75,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: false,
    Draggable:true,
    arrows:false,
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
    <div className="flex justify-center forthejustbackgroundandthepaddig">
      <div className="container p-4">
        <div className="theprnt w-full flex  items-center ">
          <div className="leftimageonefortheprntofthelef ">
            <img
              src="./studentlearning.svg"
              alt="studentlearning"
              className="thestudentlearing w-full"
            />
          </div>

          <div className="therightsliderforthevideoone flex flex-col flex-grow ">
            <h2 className="theonewhowiththetestimonial">Success stories</h2>
            <motion.div
          initial={{ opacity: 0 }} // Initial state (opacity 0)
          animate={{ opacity: inView ? 1 : 0 }}// Animation state (opacity 1)
          transition={{ duration: 1 }} // Animation duration (in seconds)
          ref={ref} className={`download-app-container  ${inView ? 'animated' : ''}`}
        >
            <div className=" slider-container anybro">
            <Slider {...settings}>
                <div className="testimonial">
                  <img
                    src="./hardstudy.jpg"
                    alt="theonewho"
                    className="theimageofthetestimational "
                  />
                  <div className="theplayiconfortheimageone">
                    <p className="theforoncxt">
                      <FontAwesomeIcon icon={faCirclePlay} color="#ffffff" />
                    </p>
                  </div>
                </div>

                <div className="testimonial">
                  <img
                    src="./hardstudy.jpg"
                    alt="theonewho"
                    className="theimageofthetestimational"
                  />
                  <div className="theplayiconfortheimageone">
                    <p className="theforoncxt">
                      <FontAwesomeIcon icon={faCirclePlay} color="#ffffff" />
                    </p>
                  </div>
                </div>

                <div className="testimonial">
                  <img
                    src="./hardstudy.jpg"
                    alt="theonewho"
                    className="theimageofthetestimational"
                  />
                  <div className="theplayiconfortheimageone">
                    <p className="theforoncxt">
                      <FontAwesomeIcon icon={faCirclePlay} color="#ffffff" />
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
