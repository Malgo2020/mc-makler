import React, { useState, useEffect } from "react";

import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import "./App.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 700);

  const resize = () => {
    setIsMobile(window.innerWidth < 500);
    setIsTablet(window.innerWidth < 700);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  return (
    <div className="Container Flex">
      <Menu isMobile={isMobile} isTablet={isTablet} />
      <Content isMobile={isMobile} isTablet={isTablet} />
      <Footer />
    </div>
  );
};

export default App;
