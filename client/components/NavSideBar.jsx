import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineDashboard } from "react-icons/ai";
import { BsTruck, BsPeople } from "react-icons/bs";
import { GiPayMoney, GiSteeringWheel, GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

//Nav side button component
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

const MiniNavButton = ({ tag, icon, link }) => {
  return (
    <Link href={link}>
      <button className="mt-5 flex items-center mx-auto border-solid text-4xl rounded-xl hover:bg-[#007ea7] text-white">
        {icon}
      </button>
    </Link>
  );
};

const NavSideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <div
          className="flex flex-col md:w-56 h-screen border-black border-r-2"
          style={{ backgroundColor: "var(--cerulean)" }}
        >
          <div className="py-4 border-grey-400 border-b-2 mx-2 mt-3 w-[90%] flex flex-row relative justify-center ">
            <button
              className="text-4xl text-white "
              onClick={() => setOpen(!open)}
            >
              <RxCross1 className="border-zinc-200 border-2 rounded-xl" />
            </button>
            <div className="mx-5 mt-3">Company Name</div>
          </div>
          <NavButton tag="DashBoard" icon={<AiOutlineDashboard />} link={"/"} />
          <NavButton tag="Clients" icon={<BsPeople />} link={"/clients"} />
          <NavButton tag="Vehicles" icon={<BsTruck />} link={"/vehicles"} />
          <NavButton
            tag="Drivers"
            icon={<GiSteeringWheel />}
            link={"/drivers"}
          />
          <NavButton
            tag="Purchasing"
            icon={<GiPayMoney />}
            link={"/expenses"}
          />
        </div>
      ) : (
        <div
          className="flex flex-col w-20 h-screen border-black border-r-2 "
          style={{ backgroundColor: "var(--cerulean)" }}
        >
          <button onClick={() => setOpen(!open)} className="mt-0">
            <GiHamburgerMenu className="text-4xl text-white mx-auto mt-9 " />
          </button>
          <hr className="text-grey-400 mt-2 w-[85%] mx-auto" />
          <MiniNavButton
            tag="DashBoard"
            icon={<AiOutlineDashboard />}
            link={"/"}
          />
          <MiniNavButton tag="Clients" icon={<BsPeople />} link={"/clients"} />
          <MiniNavButton tag="Vehicles" icon={<BsTruck />} link={"/vehicles"} />
          <MiniNavButton
            tag="Drivers"
            icon={<GiSteeringWheel />}
            link={"/drivers"}
          />
          <MiniNavButton
            tag="Purchasing"
            icon={<GiPayMoney />}
            link={"/expenses"}
          />
        </div>
      )}
    </div>
  );
};

export default NavSideBar;
