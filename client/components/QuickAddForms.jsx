import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

// ### Forms for quick add button

export const VehicleForm = () => {
  const [vehicle, setVehicle] = useState({
    model: "",
    make: "",
    win: "",
    year: null,
    repairs: null,
  });

  const handleSubmitVehicle = async (e) => {
    await axios.post("http://localhost:5010/vehicles", vehicle);
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
    balance: null,
    trips: null,
  });

  const handleSubmitClient = async (e) => {
    await axios.post("http://localhost:5010/clients", client);
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

export const DriverForm = () => {
  const [driver, setDriver] = useState({
    firstname: "",
    lastname: "",
    startdate: "",
  });

  const handleSubmitDriver = async (e) => {
    await axios.post("http://localhost:5010/drivers", driver);
  };

  return (
    <div className="relative">
      <div className=" text-center absolute top-40 right-1/3 bg-white z-10 border-zinc-200 border-solid border-2 rounded-xl shadow-xl pb-5 ">
        <span>Add New Driver</span>
        <form className="mx-8 flex flex-col" onSubmit={handleSubmitDriver}>
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="First Name"
            onChange={(e) =>
              setDriver({ ...driver, firstname: e.target.value })
            }
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="Last Name"
            onChange={(e) => setDriver({ ...driver, lastname: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="Start Date"
            onChange={(e) =>
              setDriver({ ...driver, startdate: e.target.value })
            }
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

export const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    date: "",
    type: "",
    name: "",
    location: "",
    price: null,
    employee: "",
  });

  const handleSubmitExpense = async (e) => {
    await axios.post("http://localhost:5010/expenses", expense);
  };

  return (
    <div className="relative">
      <div className=" text-center absolute top-40 right-1/3 bg-white z-10 border-zinc-200 border-solid border-2 rounded-xl shadow-xl pb-5 ">
        <span>Add Expense</span>
        <form className="mx-8 flex flex-col" onSubmit={handleSubmitExpense}>
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="date"
            name="date"
            value={expense.date}
            onChange={(e) => setExpense({ ...expense, date: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="type"
            onChange={(e) => setExpense({ ...expense, type: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="name"
            onChange={(e) => setExpense({ ...expense, name: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="location"
            onChange={(e) =>
              setExpense({ ...expense, location: e.target.value })
            }
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="price"
            onChange={(e) => setExpense({ ...expense, price: e.target.value })}
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="employee"
            onChange={(e) =>
              setExpense({ ...expense, employee: e.target.value })
            }
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

export const EventForm = () => {
  const [event, setEvent] = useState({
    date: "",
    name: "",
    description: "",
  });

  const handleCreation = async (e) => {
    await axios.post("http://localhost:5010/events", event);
  };

  return (
    <div className="relative">
      <div className=" text-center absolute top-40 right-1/3 bg-white z-10 border-zinc-200 border-solid border-2 rounded-xl shadow-xl pb-5 ">
        <span>Add Event</span>
        <form className="mx-8 flex flex-col" onSubmit={handleCreation}>
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
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
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
