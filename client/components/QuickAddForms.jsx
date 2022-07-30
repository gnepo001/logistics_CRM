import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

export const Vehicle = () => {
  const [vehicle, setVehicle] = useState({
    model: "",
    make: "",
    win: "",
    year: null,
    repairs: null,
  });

  const handleSubmitVehicle = async (e) => {
    await axios.post("http://localhost:5010/vehicles", { vehicle });
  };

  return (
    <div className="relative">
      <div className=" text-center absolute top-40 right-1/3 bg-white z-10 border-zinc-200 border-solid border-2 rounded-xl shadow-xl pb-5 ">
        <span>Add New Vehicle</span>
        <form className="mx-8 flex flex-col" onSubmit={handleSubmitVehicle}>
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="model"
            onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="make"
            onChange={(e) => setVehicle({ ...vehicle, make: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="vin"
            onChange={(e) => setVehicle({ ...vehicle, vin: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="year"
            onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="repairs"
            onChange={(e) =>
              setVehicle({ ...vehicle, repairs: e.target.value })
            }
          />
          <button
            className="bg-[#00A7E1] hover:bg-[#007EA7] mt-2 rounded-lg"
            type="submit"
          >
            Create
          </button>
          <div className="relative bottom-56 left-48 text-red-500 w-auto height-auto text-2xl">
            <AiFillCloseCircle />
          </div>
        </form>
      </div>
    </div>
  );
};

export const ClientForm = () => {
  const [client, setClient] = useState({
    name: "",
    balance: "",
    trips: null,
  });

  const handleSubmitClient = async (e) => {
    await axios.post("http://localhost:5010/clients", { cleint });
  };

  return (
    <div className="relative">
      <div className=" text-center absolute top-40 right-1/3 bg-white z-10 border-zinc-200 border-solid border-2 rounded-xl shadow-xl pb-5 ">
        <span>Add New Client</span>
        <form className="mx-8 flex flex-col" onSubmit={handleSubmitClient}>
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="name"
            onChange={(e) => setClient({ ...client, name: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="balance"
            onChange={(e) => setClient({ ...client, balance: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="trips"
            onChange={(e) => setClient({ ...client, trips: e.target.value })}
          />
          <button
            className="bg-[#00A7E1] hover:bg-[#007EA7] mt-2 rounded-lg"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
