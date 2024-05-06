import React, { useEffect } from "react";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import Proyectos from "./Components/Proyectos";
import Footer from "./Components/Footer";
import Contacto from "./Components/Contacto";
import ScrollToTop from "./Components/ScrollToTop";
import ButtonCV from "./Components/ButtonCV";

const App = () => {
  return (
    <>
      <Header />
      <MainContainer />
      <Proyectos />
      <ButtonCV />
      <Contacto />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
