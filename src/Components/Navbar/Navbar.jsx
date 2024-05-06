import {
  faFontAwesome,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faChevronDown,
  faChevronRight,
  faCircleQuestion,
  faCircleUser,
  faEarthAsia,
  faEllipsisVertical,
  faGraduationCap,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css";
import { faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";

export default function Navbar() {

  const [schemedropdown, setschemedropdown] = useState(false)
  return (
    <div className="smaeleftpaddings flex items-center py-4 md:py-12 ">
      <div className="leftlogosect flex gap-2 py-2 items-center">
        <div className="thenavbarlinesicon">
          <p className="thehamburgericonfornavbar">
            <FontAwesomeIcon icon={faBars} />
          </p>
        </div>
        <img className="leftimglogo" alt="logo1" src="./emblem-logo.svg" />
        <img
          className="rightimglogo"
          alt="logo2"
          src="./skill-india-logo.svg"
        />
      </div>

      <div className="mainnavbarsection">
        <ul className="navbarulprnt flex gap-4 px-4">
          <li className="thelichildofthenavbarprnt relative" >
            <a title="Schemes" onClick={()=>{setschemedropdown(!schemedropdown)}}>
              <div className="theinnerlogoandtextinli">
                <p className="theleftlogoofp">
                  <FontAwesomeIcon icon={faHandshake} />
                </p>
                <p className="theleftlogoofp forseprateonetext">Schemes</p>
                <p className="theleftlogoofp">
                  <FontAwesomeIcon icon={faChevronDown} />
                </p>
              </div>
            </a>

            <div className="theabsoluteboxforanotherinfo" style={schemedropdown?{display:"flex",flexDirection:"column"}:{display:"none"}}>
              <div className="thetextoneprntfortheabsoluteboc flex justify-between items-center py-3 px-2">
                <p className="thetextfortheabsolutbox">
                  PMKVY
                </p>

                <FontAwesomeIcon icon={faChevronRight}/>
              </div>
              <p className="thetextforabsdolyyre py-3 px-2">NSDC Academy</p>
              <p className="thetextforabsdolyyre  py-3 px-2">An Skilled Program</p>

            </div>
          </li>

          <li className="thelichildofthenavbarprnt">
            <a title="Recommendation">
              <div className="theinnerlogoandtextinli">
                <p className="theleftlogoofp">
                  <FontAwesomeIcon icon={faFontAwesomeFlag} />
                </p>
                <p className="theleftlogoofp forseprateonetext">
                  Recommendation
                </p>
              </div>
            </a>
          </li>

          <li className="thelichildofthenavbarprnt">
            <a title="Skill Courses">
              <div className="theinnerlogoandtextinli">
                <p className="theleftlogoofp">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </p>
                <p className="theleftlogoofp forseprateonetext">
                  Skill Courses
                </p>
              </div>
            </a>
          </li>

          <li className="thelichildofthenavbarprnt">
            <a title="Job Exchange">
              <div className="theinnerlogoandtextinli">
                <p className="theleftlogoofp">
                  <FontAwesomeIcon icon={faBriefcase} />
                </p>
                <p className="theleftlogoofp forseprateonetext">Job Exchange</p>
              </div>
            </a>
          </li>

          <li className="thelichildofthenavbarprnt">
            <a title="Skill Centre">
              <div className="theinnerlogoandtextinli">
                <p className="theleftlogoofp">
                  <FontAwesomeIcon icon={faLocationDot} />
                </p>
                <p className="theleftlogoofp forseprateonetext">Skill Centre</p>
              </div>
            </a>
          </li>

          <li className="thelichildofthenavbarprnt">
            <a title="Skill India Map">
              <div className="theinnerlogoandtextinli">
                <p className="theleftlogoofp">
                  <FontAwesomeIcon icon={faEarthAsia} />
                </p>
                <p className="theleftlogoofp forseprateonetext">
                  Skill India Map
                </p>
              </div>
            </a>
          </li>

          <li className="thelichildofthenavbarprnt">
            <a title="More">
              <div className="theinnerlogoandtextinli">
                <p className="theleftlogoofp">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="forbetterappreaceonly flex gap-2">
        <div className="rightnavbarsectionforloginandregisterbtn flex items-center">
          <div className="leftoftherightnavbarsectionforlogin">
            <a title="Search" className="">
              <p className="theleftlogoofp forsearchandcontact px-2">
                <FontAwesomeIcon icon={faSearch} className="fa-fw" />
              </p>
            </a>
            <a title="Contact Us" className="">
              <p className="theleftlogoofp forsearchandcontact px-2 ">
                <FontAwesomeIcon icon={faCircleQuestion} className="fa-fw" />
              </p>
            </a>
          </div>
        </div>

        <div className="thelastfromrightofthenavbar">
          <div className="theprntfortheregisterandloginbtn  hidden lg:flex">
            <button title="Register" className="Registerbutton px-3 py-2 ">
              Register
            </button>
            <button title="Login" className="LOginbutton px-3 py-2">
              Login
            </button>
          </div>
          <div className="theprntfortheregisterandloginbtn flex lg:hidden items-center ">
            <p className="wecanhavetheusericonalso"><FontAwesomeIcon icon={faCircleUser}/></p>
          </div>
        </div>
      </div>


    </div>
  );
}
