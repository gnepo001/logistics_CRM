import React from "react";

const Dashboard = () => {
  return (
    <div className="p-12 flex flex-col">
      <div className="flex flex-row">
        <div className="border-zinc-200 border-solid border-2">
          <h1 className="border-zinc-200 border-b-2">Drivers</h1>
          <h1>John1 John1</h1>
          <h1>John2 John2</h1>
          <h1>John3 John3</h1>
        </div>
        <div className="border-zinc-200 border-solid border-2 mx-5">
          <h1 className="border-zinc-200 border-b-2">Drivers</h1>
        </div>
        <div className="border-zinc-200 border-solid border-2 mx-5">
          <h1 className="border-zinc-200 border-b-2">Trips (current week)</h1>
        </div>
      </div>
      <div className="border-zinc-200 border-solid border-2 mt-10">
        <h1 className="border-zinc-200 border-b-2">Weekly Revenue</h1>
      </div>
      <div className="border-zinc-200 border-solid border-2 mt-10">
        <h1 className="border-zinc-200 border-b-2">Weekly Fuel Costs</h1>
      </div>
    </div>
  );
};

export default Dashboard;
