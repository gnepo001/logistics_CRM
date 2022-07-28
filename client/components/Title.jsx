import React from "react";

const Title = ({ title }) => {
  return (
    <div className="bg-white">
      <h1 className="mx-5  py-3 font-bold">{title}</h1>
      <div className="border-zinc-200 border-solid border-b-2" />
    </div>
  );
};

export default Title;
