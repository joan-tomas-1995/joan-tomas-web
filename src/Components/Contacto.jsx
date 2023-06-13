import React from "react";
import { useTranslation } from "react-i18next";
import Formulario from "./Formulario";

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto">
      <h3 className="text-center font-bold text-3xl my-12 text-[#CCD6F6]">
        {t("contactoFinal")}
      </h3>
      <div className="flex flex-col items-center p-6 m-4 md:mx-auto rounded-xl bg-[#1E2936] my-6 shadow-lg hover:bg-[#283646] transition-all duration-500 shadow-[#8993b029] hover:scale-[0.999] max-w-[600px] text-[#CCD6F6]">
        <p className="text-center font-bold text-xl my-4">{t("descripcionContacto")}</p>
        <div className="flex flex-col justify-center items-center w-64">
          <a
            title="Email"
            href="mailto: joan.tomas.miralles@gmail.com"
            target="blank">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_wbhpdrhp.json"
              background="transparent"
              speed="1"
              loop
              autoplay></lottie-player>
          </a>
        </div>
        <Formulario />
      </div>
    </section>
  );
};

export default Contacto;
