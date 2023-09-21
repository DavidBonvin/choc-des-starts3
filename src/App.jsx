import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

const App = () => {


  
  return (
    
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <h1 className="text-end">Choc des stars</h1>
            {/* <Hero /> */}
          </div>
           <About />
          {/*<Experience /> */}
          {/* <Tech /> */}
          
          {/* <Feedbacks /> */}
          <div className="relative z-0">
             {/* <Contact  /> */}
             <Works />
            <StarsCanvas /> 
          </div>
        </div>
      </BrowserRouter>
    
  );
};

export default App;
