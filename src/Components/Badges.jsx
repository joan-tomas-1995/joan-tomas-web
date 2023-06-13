import React from "react";

const Insignia = ({ tecnologia }) => {
  return (
    <div className="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 w-fit h-fit">
      {tecnologia}
    </div>
  );
};

export default Insignia;
