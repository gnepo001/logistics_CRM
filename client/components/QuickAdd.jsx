import React, { useState } from "react";

import { VehicleForm, ClientForm } from "./QuickAddForms";

const QuickAdd = () => {
  const [showForm, setShowForm] = useState(false);
  const [Form, setForm] = useState(null);

  const Form2 = ({ data }) => {
    return <div>{data}</div>;
  };

  const handleTest = (type) => {
    let form = null;
    switch (type) {
      case "vehicle":
        setForm(<VehicleForm />);
      case "client":
        setForm(<ClientForm />);
        break;
    }
    setShowForm(!showForm);
  };

  const Button = ({ content, action }) => {
    return (
      <button
        className="rounded-xl text-sm mx-10 mt-1 bg-[#00A7E1] hover:bg-[#007EA7] text-white"
        onClick={() => handleTest(action)}
      >
        {content}
      </button>
    );
  };

  return (
    <div className="relative">
      <div className="absolute z-10 top-10 right-3 bg-white w-64 flex flex-col border-zinc-200 border-solid border-2 rounded-xl shadow-xl pb-5">
        <span className="text-center text-sm font-bold">Quick Add</span>

        <Button content="Vehicle" action="vehicle" />
        <Button content="Client" action="client" />
        <Button content="Driver" action="driver" />
        <Button content="Expense" action="expense" />
      </div>
      {showForm && Form}
    </div>
  );
};

export default QuickAdd;