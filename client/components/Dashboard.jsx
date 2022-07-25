import React from "react";

const Dashboard = ({ drivers, expenses }) => {
  return (
    <div className="p-12 flex flex-col">
      <div className="flex flex-row">
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
          <h1 className="border-zinc-200 border-b-2">Trips (current week)</h1>
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
