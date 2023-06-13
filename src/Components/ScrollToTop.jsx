import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="fixed bottom-4 right-4 z-2 w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#CCD6F6] text-white flex items-center justify-center shadow-lg shadow-pink-20/20 hover:shadow-pink-500/40"
      onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 md:w-6 md:h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#0B182F">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
