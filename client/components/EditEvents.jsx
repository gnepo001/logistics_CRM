import React, { useState } from "react";
import axios from "axios";

const Editpopup = (id) => {
  console.log(id);
  const [event, setEvent] = useState({
    date: "",
    name: "",
    description: "",
  });

  const handleEdit = async (e) => {
    await axios.patch(`http://localhost:5010/events/${id.id}`, event);
  };

  return (
    <div>
      <form className="mx-8 flex flex-col" onSubmit={handleEdit}>
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

export default Editpopup;
