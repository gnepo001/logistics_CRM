import React, { useState } from "react";

import Title from "./Title";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { UserData } from "../data/data";

const Dashboard = ({ drivers, expenses }) => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Nums",
        data: UserData.map((data) => data.num),
      },
    ],
  });

  const [lineBarData, setLineBarData] = useState({
    labels: [0, 1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Costs",
        data: [1, 2, 3, 4, 5],
      },
    ],
  });

  return (
    <div className="flex flex-col">
      <Title title="Dashboard" />

      {/* Top Row */}
      <div className="flex flex-row mt-10 mx-10 h-2/3">
        <div className=" border-zinc-200 border-solid border-2 rounded-md bg-white flex flex-col w-1/2">
          <h1 className="mx-10">Calender</h1>
          <span>Sept 22 - Payment Truck</span>
          <span>Sept 27 - Payment Card 2</span>
          <span>Oct 04 - Payment Loan</span>
        </div>

        {/* Quardernt 2 */}
        <div className="flex flex-row my-2 px-12 w-1/2">
          <div className="flex flex-col w-full">
            {/* Q2 Top row */}
            <div className="flex flex-row">
              <div className="border-zinc-200 border-solid border-2 rounded-md bg-white w-1/2">
                <h1 className="border-zinc-200 border-b-2">Drivers</h1>
                {drivers.map((driver) => (
                  <div className="flex" key={driver._id}>
                    <h1>{driver.firstname} &nbsp;</h1>
                    <h1>{driver.lastname}</h1>
                  </div>
                ))}
              </div>
              <div className="border-zinc-200 border-solid border-2 mx-5 rounded-md bg-white w-1/2">
                <h1 className="border-zinc-200 border-b-2">Vehicles</h1>
                <h1>Active </h1>
                <h1>Issue</h1>
              </div>
            </div>
            {/* Q2 bottom row */}
            <div className="flex flex-row mt-5">
              <div className="border-zinc-200 border-solid border-2 rounded-md bg-white w-1/2">
                <h1 className="border-zinc-200 border-b-2">Clients</h1>
                {drivers.map((driver) => (
                  <div className="flex" key={driver._id}>
                    <h1>{driver.firstname} &nbsp;</h1>
                    <h1>{driver.lastname}</h1>
                  </div>
                ))}
              </div>
              <div className="border-zinc-200 border-solid border-2 mx-5 rounded-md bg-white w-1/2">
                <h1 className="border-zinc-200 border-b-2">Vehicles</h1>
                <h1>Active </h1>
                <h1>Issue</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Half of page */}
      <div className="flex flex-row mx-10 mt-5 h-2/3w-full text-center h-1/3">
        <div className="border-zinc-200 border-solid border-2 mt-10 bg-white w-1/2 rounded-md">
          <h1 className="border-zinc-200 border-b-2">Weekly Revenue</h1>
          <LineChart data={lineBarData} />
        </div>
        <div className="border-zinc-200 border-solid border-2 mt-10 bg-white w-1/2 mx-10 rounded-md">
          <h1 className="border-zinc-200 text-center">Weekly Costs</h1>
          <BarChart data={userData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
