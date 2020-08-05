import React, { useState, useEffect } from "react";

import { IntlProvider } from "react-intl";

import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";

import translations_en from "./translations/en";
import translations_de from "./translations/de";

import "./App.css";

const translations = {
  de: translations_de,
  en: translations_en,
};

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 700);
  const [language, setLanguage] = useState("en");

  const resize = () => {
    setIsMobile(window.innerWidth < 550);
    setIsTablet(window.innerWidth < 700);
  };

  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("de");
    } else {
      setLanguage("en");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  return (
    <IntlProvider messages={translations[language]} locale={language}>
      <div className="Container Flex">
        <Menu
          isMobile={isMobile}
          isTablet={isTablet}
          toggleLanguage={toggleLanguage}
          language={language}
        />
        <Content isMobile={isMobile} isTablet={isTablet} language={language} />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
