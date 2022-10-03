import React from "react";
import Title from "../components/Title";
import axios from "axios";

const drivers = ({ drivers }) => {
  return (
    <div>
      <Title title="Drivers" />
      <div className="border-zinc-200 border-solid border-2 mt-5 mx-5 rounded-md bg-white">
        <div className="flex flex-row justify-around bg-[#007EA7] rounded-md text-white">
          <h1>Employee</h1>
          <h1>Standing</h1>
          <h1>Start Date</h1>
        </div>
        {drivers.map((driver) => (
          <div key={driver._id}>
            {driver.lastname}
            {","} {driver.firstname}
          </div>
        ))}
        Drivers
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const drivers = await axios.get("http://localhost:5010/drivers");
  return {
    props: {
      drivers: drivers.data,
    },
  };
};

export default drivers;
