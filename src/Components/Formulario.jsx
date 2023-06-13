import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

export const Formulario = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    const recaptchaValue = new FormData(form.current).get("g-recaptcha-response");

    if (!recaptchaValue) {
      console.log("Por favor, completa el reCAPTCHA");
      return;
    }

    emailjs
      .sendForm("service_7z3dfk1", "template_scny9f5", form.current, "Bq_jx3b2eIvWnz07s")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="flex flex-col items-center justify-center [&>input]:rounded-md [&>label]:my-2 [&>input]:p-2 [&>textarea]:p-2 [&>input]:bg-[#CCD6F6] [&>input]:text-[#0B182F]"
      ref={form}
      onSubmit={sendEmail}>
      <label>{t("nombreForm")}</label>
      <input
        type="text"
        name="user_name"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
      />
      <label>{t("mensajeForm")}</label>
      <textarea
        name="message"
        className="bg-[#CCD6F6] w-60 h-28 rounded-md text-[#0B182F]"
      />
      <ReCAPTCHA
        className="mt-4"
        sitekey="6LeoOJMmAAAAAFhWNe--VwCp3rinDeos7ThdjfFZ"
      />
      <input
        className="bg-[#CCD6F6] hover:bg-[#8ca1e7] font-bold py-2 px-4 rounded cursor-pointer mt-4"
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default Formulario;
