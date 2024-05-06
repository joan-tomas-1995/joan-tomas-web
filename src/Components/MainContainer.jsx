import React from "react";
import logos from "../Components/Logos";
import { useTranslation } from "react-i18next";

const MainContainer = () => {
  const { t } = useTranslation();

  return (
    <div
      id="inicio"
      className="[&>p]:px-10 [&>p]:py-4 py-8 flex justify-center text-left flex-col w-[100%] max-w-[600px] mx-auto text-[#CCD6F6] scroll-mt-20 animate-fade-up animate-ease-in-out
">
      <div className="flex justify-center flex-col space-x-4 text-center sm:flex-row ">
        <div className="flex justify-center flex-col">
          <p className="text-xl">{t("nombre")}</p>
          <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black pt-4">
            JOAN TOMÁS
          </h1>
          <p className="text-xl pt-4 ">{t("nombre2")}</p>
        </div>
        <div className="flex items-center justify-center m-4">
          <div className="group foto-nombre flex justify-center items-center flex-col bg-gray-200 rounded-full relative z-1000 w-[250px] h-[250px] transition-all duration-300">
            <p className="absolute z-20 top-32 text-xl font-black text-center group-hover:flex hidden transition-all duration-300 text-[#333]">
              14-08-1995
            </p>
            <p className="absolute z-20 top-16 text-xl font-black text-center group-hover:flex hidden transition-all duration-300 text-[#333]">
              Alcora, España
            </p>
            <img
              className="rounded-full object-cover object-center w-[250px] h-[250px] mx-auto shadow-xl shadow-[#8993b029] border-4 border-[#CCD6F6] hover:opacity-30 transition-all duration-300 z-10"
              src="large-joan.webp"
              alt="Imagen de perfil Joan Tomás"
            />
          </div>
        </div>
      </div>
      <p className="text-base b-2 flex p-6 m-4 rounded-md bg-[#1E2936] my-6 shadow-lg shadow-[#8993b029] hover:bg-[#283646] transition-all duration-300">
        {t("descripcion")}
      </p>
      <p className="text-base b-2 flex p-6 m-4 rounded-md bg-[#1E2936] my-6 shadow-lg shadow-[#8993b029] hover:bg-[#283646] transition-all duration-300">
        {t("descripcion2")}
      </p>
      <div className="text-sm b-2 flex flex-col justify-center text-center p-6 m-4 rounded-md bg-[#1E2936] my-6 shadow-lg shadow-[#8993b029] hover:bg-[#283646] transition-all duration-300">
        <h2 className="p-2 text-base">{t("tecnologias")}</h2>
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-4 [&>li>a>img]:p-4 [&>li>a>img]:w-20">
          {logos.map((logo, index) => (
            <li
              key={index}
              className="drop-shadow-lg">
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/*       <div className="absolute z-[0] w-[70%] sm:w-[50%] h-[45%] sm:h-[30%] top--35 sm:top-[50%] pink__gradient" />
       */}{" "}
    </div>
  );
};

export default MainContainer;
