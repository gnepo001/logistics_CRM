import axios from "axios";
import React, { useState } from "react";

const Form = ({ clientname, balance }) => {
  // state for client invoice submission
  const [clientInvoice, setClientInvoice] = useState({
    client: clientname,
    date: "",
    from: "",
    to: "",
    quantity: 0,
    loadType: "",
    price: 0,
    note: "",
    completed: false,
  });

  //Posts data to database
  const handleSubmit = async (e) => {
    /////need to update the balance of the client
    await axios.post("http://localhost:5010/clients/invoices", clientInvoice);
  };

  return (
    <div className="relative">
      <div className="absolute mt-40 right-1/2 border-zinc-200 border-solid border-2 rounded-md shadow-xl text-center">
        <span>New Invoice</span>
        <form className="mx-8 my-5 flex flex-col" onSubmit={handleSubmit}>
          <input
            className="hidden"
            name="clientname"
            readOnly
            value={clientInvoice.client}
          />
          <input
            className="Border-zinc-200 border-2 mt-1"
            placeholder="date"
            name="date" //name and value needed to correctly append data to url
            value={clientInvoice.date}
            onChange={(e) =>
              setClientInvoice({ ...clientInvoice, date: e.target.value })
            }
          />
          <input
            className="Border-zinc-200 border-2 mt-1"
            placeholder="from"
            name="from"
            value={clientInvoice.from}
            onChange={(e) =>
              setClientInvoice({ ...clientInvoice, from: e.target.value })
            }
          />
          <input
            className="Border-zinc-200 border-2 mt-1"
            placeholder="to"
            name="to"
            value={clientInvoice.to}
            onChange={(e) =>
              setClientInvoice({ ...clientInvoice, to: e.target.value })
            }
          />
          <input
            className="Border-zinc-200 border-2 mt-1"
            placeholder="quantity"
            name="quantity"
            value={clientInvoice.quantity}
            onChange={(e) =>
              setClientInvoice({ ...clientInvoice, quantity: e.target.value })
            }
          />
          <input
            className="Border-zinc-200 border-2 mt-1"
            placeholder="boxes/pallets"
            name="boxes"
            value={clientInvoice.boxes}
            onChange={(e) =>
              setClientInvoice({ ...clientInvoice, loadType: e.target.value })
            }
          />
          <input
            className="Border-zinc-200 border-2 mt-1"
            placeholder="price"
            name="price"
            value={clientInvoice.price}
            onChange={(e) =>
              setClientInvoice({ ...clientInvoice, price: e.target.value })
            }
          />
          <input
            className="Border-zinc-200 border-2 mt-1"
            placeholder="note"
            name="note"
            value={clientInvoice.note}
            onChange={(e) =>
              setClientInvoice({ ...clientInvoice, note: e.target.value })
            }
          />
          <button
            className="text-white bg-[#00A7E1] hover:bg-[#007EA7]  mt-2 rounded-lg"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

const ClientTitle = ({ title, balance, clientname }) => {
  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-white ">
      <div className="flex justify-between">
        <h1 className="mx-5  py-3 font-bold">{title}</h1>
        <span className="py-3 w-1/5 ">Total Balance: {balance}</span>
        <button
          className=" bg-[#00a7e1] hover:bg-[#007ea7] mr-4 rounded-md my-2"
          onClick={() => handleForm()}
        >
          <span className="px-2 text-white">Add Invoice</span>
        </button>
      </div>
      <div className="border-zinc-200 border-solid border-b-2" />
      {showForm && <Form clientname={clientname} balance={balance} />}
    </div>
  );
};

export default ClientTitle;
