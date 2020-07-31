import React from "react";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import "./App.css";

const App = () => (
  <div className="Container Flex">
    <Menu />
    <Content />
    <Footer />
  </div>
);

export default App;
