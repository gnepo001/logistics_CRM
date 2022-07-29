import { AiFillCloseCircle } from "react-icons/ai";

export const Vehicle = () => {
  return (
    <div className="relative">
      <div className=" text-center absolute top-40 right-1/3 bg-white z-10 border-zinc-200 border-solid border-2 rounded-xl shadow-xl pb-5 ">
        <span>Add New Vehicle</span>
        <form className="mx-8 flex flex-col">
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="model"
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="make"
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="vin"
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="year"
          />
          <input
            className="border-zinc-200 border-solid border-2 mt-1"
            placeholder="repairs"
          />
          <input
            className="bg-[#00A7E1] hover:bg-[#007EA7] mt-2 rounded-lg"
            type="submit"
            value="Create"
          />
          <div className="relative bottom-56 left-48 text-red-500 w-auto height-auto text-2xl">
            <AiFillCloseCircle />
          </div>
        </form>
      </div>
    </div>
  );
};
