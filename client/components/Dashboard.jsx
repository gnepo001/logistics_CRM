import React from "react";

const Dashboard = ({ drivers, expenses }) => {
  return (
    <div className="flex flex-col my-2 ">
      <h1 className="mx-5  py-3 font-bold">Dashboard</h1>
      <div className="border-zinc-200 border-solid border-b-2" />
      <div className="flex flex-row my-2 px-12">
        <div className="border-zinc-200 border-solid border-2">
          <h1 className="border-zinc-200 border-b-2">Drivers</h1>
          {drivers.map((driver) => (
            <div className="flex" key={driver._id}>
              <h1>{driver.firstname} &nbsp;</h1>
              <h1>{driver.lastname}</h1>
            </div>
          ))}
        </div>

        <div className="border-zinc-200 border-solid border-2 mx-5">
          <h1 className="border-zinc-200 border-b-2">Vehicles</h1>
          <h1>Active </h1>
          <h1>Issue</h1>
        </div>
      </div>
      <div className="border-zinc-200 border-solid border-2 mt-10">
        <h1 className="border-zinc-200 border-b-2">Weekly Revenue</h1>
      </div>
      <div className="border-zinc-200 border-solid border-2 mt-10">
        <h1 className="border-zinc-200 border-b-2">Weekly Fuel Costs</h1>
        {expenses.map((cost) => (
          <div key={cost._id}>{cost.cost}</div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
