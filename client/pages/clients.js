import React from "react";
import { MdMore } from "react-icons/md";

import Title from "../components/Title";

const clients = () => {
  return (
    <div>
      <Title title="Clients" />
      <div className="border-zinc-200 border-solid border-2 mt-5 mx-5 ">
        <div className="flex flex-row justify-around">
          <div>
            <h1>Client</h1>
            <div className="flex flex-row items-center justify-around">
              <MdMore />
              <span>Grant Guston</span>
            </div>
          </div>
          <div>
            <h1>Balance</h1>
            <span>1500.00</span>
          </div>
          <div>
            <h1>Trips</h1>
            <span>18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default clients;
