import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsTruck, BsPeople } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";

const NavButton = ({ tag, icon }) => {
  return (
    <button className="mt-5 flex flex-row mx-5 items-center hover:bg-blue-400 ">
      {icon}
      <div className="mx-2">{tag}</div>
    </button>
  );
};

const NavSideBar = () => {
  return (
    <div className="flex flex-col w-56 h-screen border-black border-r-2 bg-blue-200">
      <div className="font-bold py-5 border-grey-400 border-b-4">
        Company Name
      </div>
      <NavButton tag="DashBoard" icon={<AiOutlineDashboard />} />
      <NavButton tag="Clients" icon={<BsPeople />} />
      <NavButton tag="Vehicles" icon={<BsTruck />} />
      <NavButton tag="Purchasing" icon={<GiPayMoney />} />
    </div>
  );
};

export default NavSideBar;
