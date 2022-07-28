import React from "react";

const QuickAdd = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 top-4 right-3 bg-white w-64 flex flex-col border-zinc-200 border-solid border-2 rounded-xl shadow-xl">
        <span className="text-sm">Quick Add</span>
        <button
          className="rounded-xl text-sm w-auto"
          style={{ backgroundColor: "var(--cerulean)" }}
        >
          Vehicle
        </button>
      </div>
    </div>
  );
};

export default QuickAdd;
