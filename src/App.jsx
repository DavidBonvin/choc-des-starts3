import {
  About,
  Hero,
  Jue,
  Navbar,
  Planetx,
  StarsCanvas,
  Tech,
} from "./components";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <h1 className="text-end">Choc des stars</h1>
        </div>

        <div className="relative z-0">
          <About />
          <Jue />
          <Planetx />

          <Tech />
          {/* <Hero /> */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
