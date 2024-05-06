import React from "react";
import "./Lowerhero.css";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons/faSortDown";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Coursetile from "./coursetile";
import Jobexchangetile from "./Jobexchangetile";
import Skillcentre from "./Skillcentre";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";


export default function Lowerhero() {
  const [theactivebar, settheactivebar] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { ref, inView } = useInView({ threshold: 0});
  

 

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };



  const JsonData = [
    {text:"Web Design & Development",
        hours:"03:39",
        students:81345,
        users:11600,
    },
    {text:"Cyber Security",
        hours:"10:00",
        students:81345,
        users:11600,
    },
    {text:"Web Design & Development",
        hours:"03:39",
        students:81345,
        users:11600,
    },
    {text:"Kisan Drone Operator",
        hours:"21:00",
        students:813,
        users:1100,
    }

  ]

  const Anotherjsondata=[
    {text:"Technician - Plant Electrical",
      lowertext:" NSDC International Limited",
      location:" United Arab Emirates",
      opening:"Full Time | Immediate joiner",
      amount:"109,666 / month"
    },
    {text:"Technician - Plant Electrical",
      lowertext:" NSDC International Limited",
      location:" United Arab Emirates",
      opening:"Full Time | Immediate joiner",
      amount:"109,666 / month"
    },
    {text:"Technician - Plant Electrical",
      lowertext:" NSDC International Limited",
      location:" United Arab Emirates",
      opening:"Full Time | Immediate joiner",
      amount:"109,666 / month"
    },
    {text:"Technician - Plant Electrical",
      lowertext:" NSDC International Limited",
      location:" United Arab Emirates",
      opening:"Full Time | Immediate joiner",
      amount:"109,666 / month"
    }
  ]

  const skillcenterdata=[
    {
    text:" ADS SKILLS PVT LTD - PMKK(MAHARAJGANJ)",
    location:"1st & 2nd Floor   Above Mahendra Show Room   Pul No .9   Main Road Arwal, ARWAL",
    email:"rtiactivist2022.in@gmail.com",
    phone:"+91 9999934871",
    othertext:" Consignment Booking Assistant"
  },
  {
    text:" ADS SKILLS PVT LTD - PMKK(MAHARAJGANJ)",
    location:"1st & 2nd Floor   Above Mahendra Show Room   Pul No .9   Main Road Arwal, ARWAL",
    email:"rtiactivist2022.in@gmail.com",
    phone:"+91 9999934871",
    othertext:" Consignment Booking Assistant"
  },
  {
    text:" ADS SKILLS PVT LTD - PMKK(MAHARAJGANJ)",
    location:"1st & 2nd Floor   Above Mahendra Show Room   Pul No .9   Main Road Arwal, ARWAL",
    email:"rtiactivist2022.in@gmail.com",
    phone:"+91 9999934871",
    othertext:" Consignment Booking Assistant"
  },
  {
    text:" ADS SKILLS PVT LTD - PMKK(MAHARAJGANJ)",
    location:"1st & 2nd Floor   Above Mahendra Show Room   Pul No .9   Main Road Arwal, ARWAL",
    email:"rtiactivist2022.in@gmail.com",
    phone:"+91 9999934871",
    othertext:" Consignment Booking Assistant"
  },

]

  

  return (
    <div className=" flex justify-center">
       
      <div className="Lowerherosectionmain container">
      <motion.div
          initial={{ opacity: 0 }} // Initial state (opacity 0)
          animate={{ 
          opacity: inView ? 1 : 0, // Animate opacity based on inView
          }}// Animation state (opacity 1)
          transition={{ duration: 0.5 }} // Animation duration (in seconds)
          ref={ref} className={`download-app-container  ${inView ? 'animated' : ''}`}
        >
        <div className="upperloewrnavigationskillcurosel flex overflow-auto  ">
          <div className="canbeother ">
            <div
              className={`thesinglelowerskill flex ${
                theactivebar === 1 ? "furtheraddedclass" : ""
              }`}
              onClick={() => {
                settheactivebar(1);
              }}
            >
              <div className="leftofthelowerskillone">
                <p className="leftofthelowerskilloneinnertext">Skill Courses</p>
              </div>
              <div className="leftofthelowerskillone">
                <p className="leftofthelowerskillonebluetext">690+</p>
              </div>
            </div>
            {theactivebar === 1 && (
              <div className="thelastforthearrowone flex justify-center">
                <p className="anyorerthebelow">
                  {" "}
                  <FontAwesomeIcon icon={faSortDown} />
                </p>
              </div>
            )}
          </div>

          <div className="canbeother">
            <div
              className={`thesinglelowerskill flex ${
                theactivebar === 2 ? "furtheraddedclass" : ""
              }`}
              onClick={() => {
                settheactivebar(2);
              }}
            >
              <div className="leftofthelowerskillone">
                <p className="leftofthelowerskilloneinnertext">Job Exchange</p>
              </div>
              <div className="leftofthelowerskillone">
                <p className="leftofthelowerskillonebluetext">9742+</p>
              </div>
            </div>
            {theactivebar === 2 && (
              <div className="thelastforthearrowone flex justify-center">
                <p className="anyorerthebelow">
                  {" "}
                  <FontAwesomeIcon icon={faSortDown} />
                </p>
              </div>
            )}
          </div>

          <div className="canbeother">
            <div
              className={`thesinglelowerskill flex ${
                theactivebar === 3 ? "furtheraddedclass" : ""
              }`}
              onClick={() => {
                settheactivebar(3);
              }}
            >
              <div className="leftofthelowerskillone">
                <p className="leftofthelowerskilloneinnertext">Skill Centre</p>
              </div>
              <div className="leftofthelowerskillone">
                <p className="leftofthelowerskillonebluetext">42645+</p>
              </div>
            </div>
            {theactivebar === 3 && (
              <div className="thelastforthearrowone flex justify-center">
                <p className="anyorerthebelow">
                  {" "}
                  <FontAwesomeIcon icon={faSortDown} />
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="lowerherosearchandsec pt-5">
          <div className="searchbarandmostsec flex justify-between items-center gap-4 flex-col-reverse sm:flex-row">
            <h4 className="search-title"> Most Popular </h4>
            <div className="letherightserachbarprmt flex gap-2 items-center p-2">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                className="itcanbeanysearch flex-grow outline-none"
                placeholder="Search Skill Course"
                value={searchValue}
                onChange={handleInputChange}
              />
              <button
                title="Register"
                className="Registerbutton px-3 py-2 "
                disabled={searchValue.trim() === ""}
                style={{ opacity: searchValue.trim() === '' ? 0.5 : 1 }}
              >
                Register
              </button>
            </div>
          </div>
         {theactivebar===1 && <div className="lowercontentsecofhero flex gap-5 overflow-x-auto pb-3 pt-5 px-3">
             {JsonData.map((item)=>{
                  return <Coursetile text={item.text} hours={item.hours} students={item.students} users={item.users}/>
                })
             }

          </div>}

          {theactivebar===2 && <div className="lowercontentsecofhero flex gap-5 overflow-x-auto pt-5 pb-3 px-3">
             {Anotherjsondata.map((item)=>{
                  return <Jobexchangetile text={item.text} lowertext={item.lowertext} location={item.location} opening={item.opening} amount={item.amount}/>
                })
             }

          </div>}

          {theactivebar===3 && <div className="lowercontentsecofhero flex gap-5 overflow-x-auto pt-5 pb-3 px-3">
             {skillcenterdata.map((item)=>{
                  return <Skillcentre text={item.text} location={item.location} phone={item.phone} email={item.email} othertext={item.othertext}/>
                })
             }

          </div>}
        </div>
        </motion.div>
      </div>
      
    </div>
  );
}
