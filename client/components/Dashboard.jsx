import React, { useState } from "react";
import moment from "moment";

import Title from "./Title";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import axios from "axios";

const CreateForm = () => {
  const [event, setEvent] = useState({
    date: "",
    name: "",
    description: "",
  });

  const handleCreation = async (e) => {
    await axios.post("http://localhost:5010/events", event);
  };

  return (
    <div>
      <form onSubmit={handleCreation}>
        <input
          className="border-zinc-200 border-solid border-2 mt-1"
          placeholder="date"
          name="date"
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <input
          className="border-zinc-200 border-solid border-2 mt-1"
          placeholder="name"
          name="name"
          onChange={(e) => setEvent({ ...event, name: e.target.value })}
        />
        <input
          className="border-zinc-200 border-solid border-2 mt-1"
          placeholder="description"
          name="description"
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
        <button
          className="bg-[#00A7E1] hover:bg-[#007EA7] mt-2 rounded-lg"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

const Dashboard = ({ drivers, expenses, linedata, events }) => {
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
  const [showpop, setShowpop] = useState(false);

  const handlePopover = () => {
    setShowpop(!showpop);
  };

  return (
    <div className="flex flex-col">
      <Title title="Dashboard" />

      {/* Top Row */}
      <div className="flex flex-row mt-5 mx-10 h-1/3">
        <div className=" border-zinc-200 border-solid border-2 rounded-md bg-white flex flex-col w-1/2">
          <div className="flex flex-row justify-around">
            <h1 className="mx-10">Calender</h1>
            <button
              className="bg-[#00A7E1] hover:bg-[#007EA7] mt-2 rounded-lg px-5"
              onClick={handlePopover}
            >
              +
            </button>
          </div>
          {events
            ? events.map((event) => (
                <div className="flex flex-row mx-5">
                  <div>{moment(event.date).format("MMM-DD")}</div>
                  <div className="mx-5">{event.name}</div>
                  <div className="mx-5">{event.description}</div>
                </div>
              ))
            : "No Events"}
          {showpop && <CreateForm />}
        </div>

        {/* Quardernt 2 */}
        <div className="flex flex-row my-0 px-12 w-1/2">
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
      <div className="flex flex-row mx-10 h-2/3w-full text-center h-1/3 mt-3">
        <div className="border-zinc-200 border-solid border-2 mt-0 bg-white w-1/2 rounded-md">
          <h1 className="border-zinc-200 ">Weekly Revenue</h1>
          <LineChart data={lineBarData} />
        </div>
        <div className="border-zinc-200 border-solid border-2 mt-0 bg-white w-1/2 mx-10 rounded-md">
          <h1 className="border-zinc-200 text-center">Weekly Costs</h1>
          <BarChart data={userData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
