import React, { useRef, useState } from "react";
import Insignia from "./Badges";

const TarjetaProyectos = ({
  nameProject,
  description,
  enlace,
  img,
  github,
  tecnologias,
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center p-6 m-4 md:mx-auto rounded-xl bg-[#1E2936] my-6 shadow-lg hover:bg-[#283646] transition-all duration-500 shadow-[#8993b029] hover:scale-[0.999]"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="flex flex-col justify-center flex-1">
        <h2 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black pb-4 text-center md:text-left">
          {nameProject}
        </h2>
        <p className="text-sm py-2 text-[#CCD6F6]">{description}</p>
        <p className="text-sm py-2 text-[#CCD6F6]"></p>
        <div className="flex flex-wrap justify-center [&>*]:my-2 [&>*]:rounded-full [&>*]:text-[#0B182F] [&>*]:bg-[#CCD6F6] md:[&>*]:text-xs [&>*]:text-[10px]">
          {tecnologias.map((tecnologia, index) => (
            <Insignia
              tecnologia={tecnologia}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center flex-1 pl-4">
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
          }}
        />
        <img
          loading="lazy"
          className="w-auto h-auto rounded-xl shadow-lg	"
          src={img}
          alt="Imagen del proyecto de Tesla web"
        />
        <div className="flex flex-row justify-evenly pt-6">
          <a
            href={enlace}
            target="_blank">
            <button className="bg-[#9ca7c6] text-white px-1 py-1 md:px-2 md:py-2 rounded-md shadow-md	 hover:bg-[#0B182F] transition-all duration-300">
              Live Demo
            </button>
          </a>
          <a
            className=" group bg-[#9ca7c6] text-white px-1 py-1 md:px-2 md:py-2 rounded-md shadow-md  hover:bg-[#0B182F] transition-all duration-300"
            href={github}
            target="_blank">
            <img
              className="group-hover:invert"
              src="iconmonstr-github-1.svg"
              alt="Imagen icono github"
            />
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default TarjetaProyectos;
