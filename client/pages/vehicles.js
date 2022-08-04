import React from "react";
import axios from "axios";

import Title from "../components/Title";

const vehicles = ({ vehicles }) => {
  return (
    <div>
      <Title title="Fleet" />
      {vehicles.map((vehicle) => (
        <div>
          <span>{vehicle.make}</span>
        </div>
      ))}
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
