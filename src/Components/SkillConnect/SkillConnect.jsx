import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./SkillConnect.css";
import Slider from "react-slick";

export default function SkillConnect() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    <div className="theupperforskillconnect">
      <div className="Container  px-4">
        
        <div className="justfortheoneforthesilder">
        <div className="theflexforthecon flex flex-col">
          <div className="theuppertextforconnect w-full">
            <h2 className="fortheonewhowasconn">Skill India Connect</h2>
          </div>
          <div className=" slider-container">
            <Slider {...settings}>
          <div className="theloweroneforthebest py-4">
            <div className="theonecardfortheconnect">
              <div className="flex flex-grow flex-col">
                <h3 className="theonewhichisdone mt-8">
                  Confessions Of A Micromanager And How To Break The Habit
                </h3>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCalendarDay} />
                <p className="jusforwhat">05-05-2024</p>
              </div>

              <div className=" flex-grow">
                <p className="jusfortwhatthelese py-2"> ...infinite universe of reasons why employees might opt for withholding their skills and efforts. A skillful manager knows how to identify and address them instead of letting them fester, which is exactly what micromanaging would accomplish. Finally, we... </p>
              </div>
              <div className="telastfortheviewdetail flex gap-2 items-center">
                <p className="theviwdetailtextofthelastdiv theleftrightboctolateamount">
                  View Details
                </p>
                <FontAwesomeIcon icon={faArrowRight} color="#df6e12" />
              </div>
            </div>
          </div>

          <div className="theloweroneforthebest py-4">
            <div className="theonecardfortheconnect">
              <div className="flex flex-grow flex-col">
                <h3 className="theonewhichisdone mt-8">
                  Confessions Of A Micromanager And How To Break The Habit
                </h3>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCalendarDay} />
                <p className="jusforwhat">05-05-2024</p>
              </div>

              <div className=" flex-grow">
                <p className="jusfortwhatthelese py-2"> ...infinite universe of reasons why employees might opt for withholding their skills and efforts. A skillful manager knows how to identify and address them instead of letting them fester, which is exactly what micromanaging would accomplish. Finally, we... </p>
              </div>
              <div className="telastfortheviewdetail flex gap-2 items-center">
                <p className="theviwdetailtextofthelastdiv theleftrightboctolateamount">
                  View Details
                </p>
                <FontAwesomeIcon icon={faArrowRight} color="#df6e12" />
              </div>
            </div>
          </div>

          <div className="theloweroneforthebest py-4">
            <div className="theonecardfortheconnect">
              <div className="flex flex-grow flex-col">
                <h3 className="theonewhichisdone mt-8">
                  Confessions Of A Micromanager And How To Break The Habit
                </h3>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCalendarDay} />
                <p className="jusforwhat">05-05-2024</p>
              </div>

              <div className=" flex-grow">
                <p className="jusfortwhatthelese py-2"> ...infinite universe of reasons why employees might opt for withholding their skills and efforts. A skillful manager knows how to identify and address them instead of letting them fester, which is exactly what micromanaging would accomplish. Finally, we... </p>
              </div>
              <div className="telastfortheviewdetail flex gap-2 items-center">
                <p className="theviwdetailtextofthelastdiv theleftrightboctolateamount">
                  View Details
                </p>
                <FontAwesomeIcon icon={faArrowRight} color="#df6e12" />
              </div>
            </div>
          </div>

          <div className="theloweroneforthebest py-4">
            <div className="theonecardfortheconnect">
              <div className="flex flex-grow flex-col">
                <h3 className="theonewhichisdone mt-8">
                  Confessions Of A Micromanager And How To Break The Habit
                </h3>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faCalendarDay} />
                <p className="jusforwhat">05-05-2024</p>
              </div>

              <div className=" flex-grow">
                <p className="jusfortwhatthelese py-2"> ...infinite universe of reasons why employees might opt for withholding their skills and efforts. A skillful manager knows how to identify and address them instead of letting them fester, which is exactly what micromanaging would accomplish. Finally, we... </p>
              </div>
              <div className="telastfortheviewdetail flex gap-2 items-center">
                <p className="theviwdetailtextofthelastdiv theleftrightboctolateamount">
                  View Details
                </p>
                <FontAwesomeIcon icon={faArrowRight} color="#df6e12" />
              </div>
            </div>
          </div>
          </Slider>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
