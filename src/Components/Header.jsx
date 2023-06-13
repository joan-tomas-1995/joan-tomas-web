import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [flagImage, setFlagImage] = useState("flag-en.webp");

  const handleFlagChange = () => {
    if (flagImage === "flag-en.webp") {
      setFlagImage("flag-es.webp");
      i18n.changeLanguage("en");
    } else {
      setFlagImage("flag-en.webp");
      i18n.changeLanguage("es");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#1E2936] p-6 text-[#CCD6F6]  font-bold sticky top-0 shadow-lg shadow-[#181818] z-20 backdrop-filter backdrop-blur-lg bg-opacity-70 ">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#CCD6F6] flex-grow">
          <a href="/"> Joan Tomás</a>
        </div>
        <button
          title="Cambiar idioma"
          onClick={handleFlagChange}>
          <img
            className="w-6 h-6 rounded-full cursor-pointer border-[1px] border-[#CCD6F6] hover:border-[#555] transition-all ease-in-out duration-300"
            src={flagImage}
            alt="Bandera"
          />
        </button>
        <div className="md:hidden flex items-center pl-4">
          <button
            title="Menu"
            className="outline-none mobile-menu-button"
            onClick={toggleMenu}>
            {isOpen ? (
              <img
                className="w-6 h-6"
                src="x-symbol.svg"
              />
            ) : (
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        <ul className="gap-4 [&>li]:cursor-pointer hidden md:flex">
          <li className="hover:text-[#555] transition-all ease-in-out duration-300 hover:scale-[0.999] pl-4">
            <a href="#inicio">{t("inicio")}</a>
          </li>
          <li className="hover:text-[#555]  transition-all ease-in-out duration-300 hover:scale-[0.999]">
            <a href="#proyectos"> {t("proyectos")}</a>
          </li>
          <li className="hover:text-[#555] transition-all ease-in-out -mb-2 hover:scale-[0.999]">
            <a href="#contacto"> {t("contacto")}</a>
          </li>
        </ul>

        <ul
          className={`gap-4 [&>li]:cursor-pointer  ${
            isOpen ? "" : "hidden"
          } mobile-menu flex justify-center flex-col backdrop-filter backdrop-blur-lg bg-opacity-90 bg-[#1E2936] shadow-lg shadow-[#181818] transition-all ease-in-out duration-300`}>
          <li className="hover:text-[#555] transition-all ease-in-out duration-300 hover:scale-[0.999] mb-menu">
            <a
              onClick={closeMenu}
              href="#inicio">
              Inicio
            </a>
          </li>
          <li className="hover:text-[#555]  transition-all ease-in-out duration-300 hover:scale-[0.999] mb-menu">
            <a
              onClick={closeMenu}
              href="#proyectos">
              Proyectos
            </a>
          </li>
          <li className="hover:text-[#555] transition-all ease-in-out -mb-2 hover:scale-[0.999] mb-menu">
            <a
              onClick={closeMenu}
              href="#contacto">
              Contacto
            </a>
          </li>
          <div className="flex justify-center">
            <ul className="[&>li]:w-6 [&>li]:h-6 [&>li]:mr-2 [&>li]:mb-2 [&>li]:mx-4 flex justify-center flex-row mt-2">
              <li className="hover:text-[#8993B0]">
                <a
                  onClick={closeMenu}
                  href="https://www.instagram.com/kazukitopes/"
                  target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram">
                    <title>Instagram</title>
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li className="hover:text-[#8993B0]">
                <a
                  onClick={closeMenu}
                  href="https://github.com/joan-tomas-1995"
                  target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github">
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li className="hover:text-[#8993B0]">
                <a
                  onClick={closeMenu}
                  href="https://www.instagram.com/kazukitopes/"
                  target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin">
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect
                      x="2"
                      y="9"
                      width="4"
                      height="12"></rect>
                    <circle
                      cx="4"
                      cy="4"
                      r="2"></circle>
                  </svg>
                </a>
              </li>
              <li className="hover:text-[#8993B0]">
                <a
                  onClick={closeMenu}
                  href="mailto: joan.tomas.miralles@gmail.com"
                  target="blank">
                  <svg
                    className="fill-[#CCD6F6] hover:fill-[#8993B0]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24">
                    <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
