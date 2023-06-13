import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

const Formulario = () => {
  const form = useRef();
  const { t } = useTranslation();
  const recaptchaRef = useRef();

  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

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
          form.current.reset();
          recaptchaRef.current.reset();
          handleClick();
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
      <label for="name">{t("nombreForm")}</label>
      <input
        id="name"
        type="text"
        name="user_name"
      />
      <label for="name">Email</label>
      <input
        id="email"
        type="email"
        name="user_email"
      />
      <label for="message">{t("mensajeForm")}</label>
      <textarea
        id="message"
        name="message"
        className="bg-[#CCD6F6] w-60 h-28 rounded-md text-[#0B182F]"
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        className="mt-4"
        sitekey="6LeoOJMmAAAAAFhWNe--VwCp3rinDeos7ThdjfFZ"
      />
      {showMessage && (
        <p className="bg-[#abf8b4] text-[#0B182F] p-2 rounded-lg mt-4">
          {t("mensajeCorrecto")}
        </p>
      )}
      <input
        className="bg-[#CCD6F6] hover:bg-[#8ca1e7] font-bold py-2 px-4 rounded cursor-pointer mt-4"
        type="submit"
        value="Submit"
      />
    </form>
  );
};
export default Formulario;
