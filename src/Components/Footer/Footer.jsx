import React from "react";
import "../Footer/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsQrCode } from "react-icons/bs";

function Footer() {
  const FooterData = {
    weAre: [
      "ABOUT US",
      "CONTACT US",
      "TERMS OF USE",
      "PRIVACY POLICY",
      "DISCLAIMER",
    ],
    offer: [
      "SKILL COURSES",
      "SKILL CENTRE",
      "JOB EXCHANGE",
      "RECOMMENDATION",
      "SKILL INDIS MAP",
      "LIVE TRAINING SESSIONS",
      "SECTORS",
      "JOB ROLES",
      "SCHEMES",
    ],
    links: [
      "SECTOR SKILL COUNCIL",
      "NATIONAL CAREER SERVICE",
      "A&A KNOWLEDGE BACK",
      "A&A FAQS",
      "MOHUA",
      "PMKVY A&C GUIDELINES",
      "STANDALONE NOS LISTING",
      "BORROWED QP LISTING",
      "SCPWD BORROWED QP",
      "QP LISTING",
    ],
    socialIcons: [
      <FaFacebookSquare />,
      <CiLinkedin />,
      <FaSquareXTwitter />,
      <BsLinkedin />,
    ],
    images :["./satyamev_jayatee.svg" , "./departmentofadminitration.png", "./indiagovin.png",  "./towardofnew.png","./iso-logo.png"  ]
   
  };

  return (
    <div className="Footer_container relative pt-20 lg:pt-24 ">
      <div className="FooterBox-1 -top-8 lg:-top-12">
        <div className="flex justify-center items-center image-box-footer gap-2 md:gap-8">
          {FooterData.images.map((ele, index) => (
            <img key={index}  src={ele} alt="logo" className=" h-7 sm:h-9 lg:h-16" />
          ))}
        </div>
      </div>
      <div className="Container">
      <div className="flex justify-center Footer-box-2">
        <div className="bothLinks">
          <div className=" flex flex-col gap-4 items-start weAre">
            <h1 className="text-white font-bold">WHO ARE WE</h1>
            <ul className="flex flex-col justify-start items-start gap-3">
              {FooterData.weAre.map((ele, index) => (
                <li className="text-white text-[14px] font-medium" key={index}>
                  {ele}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col gap-4 items-center   weoffer">
            <h1 className="text-white font-bold">WHAT WE OFFER</h1>
            <ul className="flex flex-col justify-start items-start gap-3 boxHight">
              {FooterData.offer.map((ele, index) => (
                <li
                  className="text-white text-left text-[14px] font-medium"
                  key={index}
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center  FooterLinks">
          <h1 className="text-white font-bold">QUICK LINKS</h1>
          <ul className="flex flex-col justify-start items-start gap-3 boxHight">
            {FooterData.links.map((ele, index) => (
              <li className="text-white text-[14px] font-medium" key={index}>
                <p className="text-left">{ele}</p>
              </li>
            ))}
          </ul>
          <div className="followUsWeb gap-2">
            <h1 className="text-white font-bold">FOLLOW US</h1>
            <ul className="flex  justify-start items-start gap-6">
              {FooterData.socialIcons.map((ele, index) => (
                <li
                  className="text-white font-medium  text-[30px] "
                  key={index}
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="Footer-box-3">
        <div className="socialLinks-Box">
          <div className="followUs gap-2">
            <h1 className="text-white font-bold">FOLLOW US</h1>
            <ul className="flex  justify-start items-start gap-6">
              {FooterData.socialIcons.map((ele, index) => (
                <li
                  className="text-white font-medium  text-[30px] "
                  key={index}
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center gap-4 QRScan">
            <h1 className="text-white font-bold"> VISIT WEBSITE </h1>
            <div>
              <BsQrCode className="text-white font-medium text-[50px]" />
            </div>
          </div>
        </div>
        <div className=" flex  flex-col  justify-around gap-4 sm:flex-row p-4 items-start sm:items-center">
          <div className=" flex flex-col platform">
            <p className="text-left text-slate-400 font-[14px]">
              Platform is Owned by
            </p>
            <p className="text-left text-white font-bold font-[14px]">
              Ministry of Skill Development and Entrepreneurship, Government of
              India
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-1 sm:flex-row date">
              <p className="text-left text-white  font-[12px]">
                {" "}
                Last Modified: Sunday, 5 May, 2024{" "}
                <span className="text-left text-white font-[12px]">|</span>
              </p>

              <p className="text-left text-white f font-[12px]">
                {" "}
                Visitor Count: 176949{" "}
              </p>
            </div>
            <p className="text-left text-white f font-[12px]">
              © Copyright 2023 - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
