import React from "react";

const ClientTitle = ({ title, balance }) => {
  return (
    <div className="bg-white ">
      <div className="flex justify-between">
        <h1 className="mx-5  py-3 font-bold">{title}</h1>
        <span className="py-3 w-1/5 ">Total Balance: {balance}</span>
        <button className=" bg-[#00a7e1] hover:bg-[#007ea7] mr-4 rounded-md my-2">
          <span className="px-2 text-white">Add Invoice</span>
        </button>
      </div>
      <div className="border-zinc-200 border-solid border-b-2" />
    </div>
  );
};

export default ClientTitle;
