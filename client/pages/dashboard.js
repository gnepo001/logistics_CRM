import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import { RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";

import Title from "../components/Title";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

import Editpopup from "../components/Editpopup.jsx";

const Dashboard = ({ drivers, sum, linedata, events }) => {
  const [userData, setUserData] = useState({
    labels: linedata.map((data) => moment(data.date).format("MM-DD-YY")),
    datasets: [
      {
        label: "Costs",
        data: linedata.map((data) => data.price),
      },
    ],
  });

  const [lineBarData, setLineBarData] = useState({
    labels: linedata.map((data) => moment(data.date).format("MM-DD-YY")),
    datasets: [
      {
        label: "Costs",
        data: linedata.map((data) => data.price),
      },
    ],
  });

  const [pop, setPop] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5010/events/${id}`);
  };
  const handleEdit = async (id) => {
    setPop(true);
    setEditId(id);
    //await axios.patch(`http://localhost:5010/events/${id}`);
  };

  return (
    <div className="flex flex-col">
      <Title title="Dashboard" />

      {/* Top Row */}
      <div className="flex flex-row mt-5 mx-10 h-1/2">
        <div className=" border-zinc-200 border-solid border-2 rounded-md bg-white flex flex-col w-1/2">
          <h1 className="mb-1 bg-[#007EA7] rounded-md text-white text-center w-full">
            Calender
          </h1>
          {events
            ? events.map((event) => (
                <div key={event._id} className="flex flex-row mx-5">
                  <div className="w-1/5">
                    {moment(event.date).format("MMM-DD")}
                  </div>
                  <div className="w-2/5 truncate">{event.name}</div>
                  <div className="w-2/5 truncate">{event.description}</div>
                  <button
                    className="w-1/5"
                    onClick={() => handleDelete(event._id)}
                  >
                    <RiDeleteBin7Line />
                  </button>
                  <button
                    className="w-1/5"
                    onClick={() => handleEdit(event._id)}
                  >
                    <HiOutlinePencil />
                  </button>
                  {pop && editId == event._id ? (
                    <Editpopup id={event._id} />
                  ) : null}
                </div>
              ))
            : "No Events"}
        </div>

        {/* Quardernt 2 */}
        <div className="flex flex-row my-0 px-12 w-1/2 h-1/2">
          <div className="flex flex-col w-full">
            {/* Q2 Top row */}
            <div className="flex flex-row h-1/2">
              <div className="border-zinc-200 border-solid border-2 rounded-md bg-white w-1/2">
                <h1 className="bg-[#007EA7] rounded-md text-white text-center w-full">
                  Total Income
                </h1>
                <div>{sum}</div>
              </div>
              <div className="border-zinc-200 border-solid border-2 mx-5 rounded-md bg-white w-1/2">
                <h1 className="bg-[#007EA7] rounded-md text-white text-center w-full">
                  Total Expenses
                </h1>
                <h1>Active </h1>
                <h1>Issue</h1>
              </div>
            </div>
            {/* Q2 bottom row */}
            <div className="flex flex-row mt-5 h-1/2">
              <div className="border-zinc-200 border-solid border-2 rounded-md bg-white w-1/2">
                <h1 className="bg-[#007EA7] rounded-md text-white text-center">
                  Drivers
                </h1>
                <div className="h-4/5 overflow-y-scroll">
                  {drivers.map((driver) => (
                    <div className="flex truncate" key={driver._id}>
                      <h1>{driver.firstname} &nbsp;</h1>
                      <h1>{driver.lastname}</h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-zinc-200 border-solid border-2 mx-5 rounded-md bg-white w-1/2">
                <h1 className="bg-[#007EA7] rounded-md text-white text-center w-full">
                  Vehicles
                </h1>
                <h1>Active </h1>
                <h1>Issue</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Half of page */}
      <div className="flex flex-row mx-10 h-2/3w-full text-center h-1/3 mt-3">
        <div className="border-zinc-200 border-solid border-2 mt-0 bg-white w-1/2 rounded-md">
          <h1 className="bg-[#007EA7] rounded-md text-white text-center w-full">
            Weekly Revenue
          </h1>
          <LineChart data={lineBarData} />
        </div>
        <div className="border-zinc-200 border-solid border-2 mt-0 bg-white w-1/2 mx-10 rounded-md">
          <h1 className="bg-[#007EA7] rounded-md text-white text-center w-full">
            Weekly Costs
          </h1>
          <BarChart data={userData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
