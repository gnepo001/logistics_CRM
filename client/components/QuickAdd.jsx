import React, { useState } from "react";

import {
  VehicleForm,
  ClientForm,
  DriverForm,
  ExpenseForm,
} from "./QuickAddForms";

const QuickAdd = () => {
  //sets whether or not to display form
  const [showForm, setShowForm] = useState(false);
  //sets Form to be displayed
  const [Form, setForm] = useState(null);

  // Handle function to set form to be displayed
  const handleSetForm = (type) => {
    // switch statement to set form
    switch (type) {
      case "vehicle":
        setForm(<VehicleForm />);
        break;
      case "client":
        setForm(<ClientForm />);
        break;
      case "driver":
        setForm(<DriverForm />);
        break;
      case "expense":
        setForm(<ExpenseForm />);
        break;
    }
    setShowForm(!showForm);
  };

  //Button Component
  const Button = ({ content, action }) => {
    return (
      <button
        className="rounded-xl text-sm mx-10 mt-1 bg-[#00A7E1] hover:bg-[#007EA7] text-white"
        onClick={() => handleSetForm(action)}
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
