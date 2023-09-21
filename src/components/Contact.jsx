import { useRef, useState } from "react";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import Works from "./Works";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const Contact = () => {
  

  return (
    <div className=" h-[700px] xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-full"
      >
        <p className={styles.heroSubText}>Jouer 1</p>
        <h3 className={styles.heroHeadText}>star</h3>
        
        
       
      </motion.div> */}
<EarthCanvas />
      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-full"
      >
        <p className={styles.heroSubText}>Jouer 2</p>
        <h3 className={styles.heroHeadText}>star</h3>
        
      </motion.div> */}
      
    </div>

  ); 
};

export default SectionWrapper(Contact, "contact");
