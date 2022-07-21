import React from "react";

const NavLink = ({ tag }) => {
  return <a className="mt-5">{tag} </a>;
};

const NavSideBar = () => {
  return (
    <div className="flex flex-col w-56 h-full border-black border-r-2">
      <div className="font-bold py-5 border-grey-400 border-b-4">
        Company Name
      </div>
      <NavLink tag="DashBoard" />
      <NavLink tag="Vehicles" />
      <NavLink tag="Administration" />
      <NavLink tag="test" />
    </div>
  );
};

export default NavSideBar;
