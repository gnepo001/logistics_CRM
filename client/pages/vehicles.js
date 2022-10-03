import React from "react";
import axios from "axios";

import Title from "../components/Title";

const vehicles = ({ vehicles }) => {
  return (
    <div>
      <Title title="Fleet" />
      <div className="flex flex-row space-x-3 mt-5 mx-5">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle._id}
            className="border-b-2 rounded-md bg-white w-1/6 flex flex-col shadow-sm"
          >
            <span>{vehicle.make}</span>
            <span>{vehicle.model}</span>
            <span>{vehicle.year}</span>
            <span>{vehicle.vin}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const vehicles = await axios.get("http://localhost:5010/vehicles");

  return {
    props: {
      vehicles: vehicles.data,
    },
  };
};

export default vehicles;
