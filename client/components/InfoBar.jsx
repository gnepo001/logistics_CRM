import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

import QuickAdd from "./QuickAdd";

const InfoBar = () => {
  const [showpop, setShowpop] = useState(false);
  const handlePopover = () => {
    setShowpop(!showpop);
  };

  return (
    <div className="bg-white border-b-5 border-zinc-200 border-solid border-b-2 h-18  ">
      <button className="text-3xl mr-5 float-right" onClick={handlePopover}>
        <IoMdAddCircleOutline />
      </button>
      {showpop && <QuickAdd />}
    </div>
  );
};

export default InfoBar;
