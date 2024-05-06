import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Lowerhero from "./Components/LowerHero/Lowerhero";
import SkilledIndiamain from "./Components/Skilledindiasec/SkilledIndiamain";
import Opportunitiespage from "./Components/Opportunitiespage/Opportunitiespage";
import Lowerslider from "./Components/Lowerslider/Lowerslider";
import Lowervideoslider from "./Components/LowerVideoslider/Lowervideoslider";
import Downloadapp from "./Components/Downloadapp/Downloadapp";
import SkillConnect from "./Components/SkillConnect/SkillConnect";
import Footer from "./Components/Footer/Footer";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="theMainapp relative">
      <Navbar/>
      <div className="themainlowerofthemainpage w-full">
        <div className="theherosectionoftheimge w-full">
          <img
            src={width > 640 ? "./heromain.jpg" : "./heromobile.jpg"}
            alt="herosectionmainimg"
            className="heromainimgsec w-full"
          />
        </div>
        <Lowerhero />
        <SkilledIndiamain />
        <Opportunitiespage />
        <Lowerslider />
        <Lowervideoslider />
        <motion.div
          initial={{ opacity: 0 }} // Initial state (opacity 0)
          animate={{ opacity: inView ? 1 : 0 }}// Animation state (opacity 1)
          transition={{ duration: 0.5 }} // Animation duration (in seconds)
          ref={ref} className={`download-app-container  ${inView ? 'animated' : ''}`}
        >
          <Downloadapp  />
        </motion.div>
        <SkillConnect />
        <Footer />
      </div>
    </div>
  );
}

export default App;
