import React from "react";
import "./Downloadapp.css";

export default function Downloadapp() {
  return (
    <div className="themainupperone flex justify-center ">
      <div className="container">
        <div className="divforthelastdownloadapp flex flex-col p-6">
          <h2 className="downloappapdectio">
            {" "}
            Download the Skill India Digital Hub App!{" "}
          </h2>
          <p className="theregularinstructiondto">
            {" "}
            Use your mobile phone to meet your skilling needs{" "}
          </p>
          <ul className="theonefortheulforthedownload justify-center lg:justify-start lg:text-start flex items-center gap-3">
            <li className="wewentfortheliofnor">
              <img
                src="./Apple.svg"
                alt="apple"
                className="justbewothetheapp"
              ></img>
            </li>
            <li className="wewentfortheliofnor">
              <img
                src="./Google.svg"
                alt="apple"
                className="justbewothetheapp"
              ></img>
            </li>
            <li className="wewentfortheliofnor flex gap-2 items-center">
              <img
                src="./qr.jpg"
                alt="apple"
                className="justbewothetheapp"
              ></img>
              <span className="justletitbethe">Scan and download</span>
            </li>
          </ul>

          <div className="thejustfortheijj hidden">
            <img src="downloadd.svg" alt="the" className="thedowloadone" />
          </div>
        </div>
      </div>
      <div className="theabsoluteonefortheleft hidden lg:block">
        <img src="downloadd.svg" alt="the" className="thedowloadone" />
      </div>
    </div>
  );
}
