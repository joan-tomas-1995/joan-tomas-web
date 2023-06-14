import React from "react";
import { useTranslation } from "react-i18next";

const ButtonCV = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <a
        href="https://joantomasmiralles.es/CV-Joan%20Tomas%20Miralles%20Curriculum%202023.pdf"
        target="blank">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 mt-8 rounded inline-flex items-center">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>{t("curriculum")}</span>
        </button>
      </a>
    </div>
  );
};

export default ButtonCV;
