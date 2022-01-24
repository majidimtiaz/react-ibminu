import React from "react";
import "./style.css";

import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function App() {
  return (
    <div>
      <Header />
      <MainContent/>
      <Footer/>
    </div>
  );
}
