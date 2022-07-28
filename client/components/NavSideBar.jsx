import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsTruck, BsPeople } from "react-icons/bs";
import { GiPayMoney, GiSteeringWheel } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";

const NavButton = ({ tag, icon, link }) => {
  return (
    <Link href={link}>
      <button className="mt-5 px-3 flex flex-row mx-10 items-center border-solid rounded-xl hover:bg-[#007ea7] text-white">
        {icon}
        <div className="mx-2">{tag}</div>
      </button>
    </Link>
  );
};

const NavSideBar = () => {
  return (
    <div
      className="flex flex-col w-56 h-screen border-black border-r-2"
      style={{ backgroundColor: "var(--cerulean)" }}
    >
      <div className="font-bold py-5 border-grey-400 border-b-2 mx-5 mt-4">
        Company Name
      </div>
      <NavButton tag="DashBoard" icon={<AiOutlineDashboard />} link={"/"} />
      <NavButton tag="Clients" icon={<BsPeople />} link={"/clients"} />
      <NavButton tag="Vehicles" icon={<BsTruck />} link={"/"} />
      <NavButton tag="Drivers" icon={<GiSteeringWheel />} link={"/"} />
      <NavButton tag="Purchasing" icon={<GiPayMoney />} link={"/"} />
    </div>
  );
};

export default NavSideBar;
