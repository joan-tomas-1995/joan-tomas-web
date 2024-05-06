import React from "react";
import TarjetaProyectos from "../Components/TarjetaProyectos";
import { useTranslation } from "react-i18next";

const projects = [
  {
    nameKey: "Ver Precio Luz Hora",
    descriptionKey: "descricionVerPrecioLuzHora",
    techStack: "HTML CSS JavaScript React Tailwind",
    img: "verprecioluzhora.png",
    link: "https://verprecioluzhora.es/",
    github: "https://github.com/joan-tomas-1995/precio-luz-hora-app",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Red Electrica Española API"],
  },
  {
    nameKey: "Radio Lofi Music",
    descriptionKey: "radiolofimusic",
    techStack: "HTML CSS JavaScript React Tailwind",
    img: "lofiradiomusic.png",
    link: "https://lofimusicradio.com/",
    github: "https://github.com/joan-tomas-1995/lofi-radio",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Youtube API"],
  },
  {
    name: "Password Checker",
    descriptionKey: "descripcionPassword",
    techStack: "HTML CSS JavaScript Regex",
    img: "password.webp",
    link: "https://calm-unicorn-e4bdf4.netlify.app/",
    github: "https://github.com/joan-tomas-1995/password-security-checker",
    tecnologias: ["HTML", "CSS", "JavaScript", "Regex"],
  },
  {
    nameKey: "caluladorainteres",
    descriptionKey: "descripcionInteres",
    techStack: "HTML CSS JavaScript",
    img: "calculadora-interes-compuesto.webp",
    link: "https://interes-compuesto-eight.vercel.app/",
    github: "https://github.com/joan-tomas-1995/interes-compuesto",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Web Pi Photography27",
    descriptionKey: "descripcionPi",
    techStack: "HTML CSS JavaScript jQuery",
    img: "piphotography27.webp",
    link: "https://piphotography27.es/",
    github: "https://github.com/joan-tomas-1995",
    tecnologias: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    nameKey: "wikipediaPaises",
    descriptionKey: "descripcionPaises",
    techStack: "HTML CSS JavaScript REST Countries",
    img: "country-wikipedia.webp",
    link: "https://melodious-twilight-70c2b7.netlify.app/",
    github: "https://github.com/joan-tomas-1995/interes-compuesto",
    tecnologias: ["HTML", "CSS", "JavaScript", "API REST Countries"],
  },
  {
    nameKey: "gestorDePaginas",
    descriptionKey: "descricionPaginas",
    techStack: "HTML CSS JavaScript Chrome API",
    img: "ventanas.webp",
    link: "https://chrome.google.com/webstore/detail/gestor-de-ventanas/ifiaccepjdjmggfmkjipnobebddikakh?hl=es",
    github: "https://github.com/joan-tomas-1995/interes-compuesto",
    tecnologias: ["HTML", "CSS", "JavaScript", "Chrome API"],
  },
  {
    name: "Tesla Web",
    descriptionKey: "descripcionTesla",
    techStack: "HTML CSS JavaScript React Astro Builder",
    img: "tesla-web.webp",
    link: "https://tesla-web-test.vercel.app/",
    github: "https://github.com/joan-tomas-1995/tesla-web-test",
    tecnologias: ["HTML", "CSS", "JavaScript", "Astro Builder"],
  },
  {
    nameKey: "Web Joan Tomás",
    descriptionKey: "descricionWebJoan",
    techStack: "HTML CSS JavaScript React Tailwind",
    img: "joan-web-personal.webp",
    link: "https://joantomasmiralles.es/",
    github: "https://github.com/joan-tomas-1995/joan-tomas-web",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    nameKey: "Web Noticias AI",
    descriptionKey: "descricionNoticiasAI",
    techStack: "HTML CSS JavaScript React Tailwind",
    img: "noticias-ai.webp",
    link: "https://noticias-ai.com/",
    github: "https://github.com",
    tecnologias: ["HTML", "CSS", "JavaScript", "Elementor", "Wordpress"],
  },
];

const Proyectos = () => {
  const { t } = useTranslation();

  return (
    <section
      id="proyectos"
      className="animate-fade-up">
      <h2 className="text-center font-bold text-3xl my-12 text-[#CCD6F6] ">
        {t("tituloProyectos")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 max-w-[1200px] min-w-[200px] mx-auto">
        {projects.map((project, index) => (
          <TarjetaProyectos
            key={index}
            nameProject={t(project.nameKey) || project.name}
            description={t(project.descriptionKey)}
            lista={project.techStack}
            img={project.img}
            enlace={project.link}
            github={project.github}
            tecnologias={project.tecnologias}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
