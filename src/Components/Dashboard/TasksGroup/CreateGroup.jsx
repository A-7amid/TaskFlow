import React, { useContext, useRef } from "react";
import { AddGroupContext } from "../../../App";

const CreateGroup = () => {
  const { setIsCreateGroup } = useContext(AddGroupContext);

  const labelRef = useRef();

  const move = () => {
    labelRef.current.style;
  };

  const handleClose = () => {
    setIsCreateGroup(false);
  };

  return (
    <div className="bg-black/60 absolute h-full w-full flex top-0 justify-center">
      <div className="bg-white h-[200px] w-[500px] top-52 relative flex flex-col dark:bg-neutral-950 dark:border-neutral-800 rounded-lg border-2">
        <div className="px-8 py-5">
          <Header handleClose={handleClose} />

          <Content handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;

function Header({ handleClose }) {
  return (
    <div className="flex justify-between">
      <h3 className="font-medium text-xl">Add New Group</h3>

      <div className="flex items-center gap-x-1">
        <span
          onClick={handleClose}
          className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer rounded-lg p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

function Content({ handleClose }) {
  return (
    <div>
      <label
        htmlFor="UserEmail"
        className="relative block mt-3 overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-yellow-500/80 dark:border-white"
      >
        <input
          type="text"
          id="UserEmail"
          placeholder="Status Name"
          className="peer h-8 w-full border-none bg-transparent p-0 pt-2 placeholder-transparent focus:border-transparent outline-none focus:ring-0 sm:text-sm dark:text-white"
        />

        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200">
          Status Name
        </span>
      </label>

      <div className="flex flex-row justify-end relative gap-x-5 font-medium text-xs mt-10">
        <button
          className="text-gray-500 cursor-pointer hover:outline-gray-500 hover:bg-gray-500 dark:bg-transparent dark:border-2 dark:text-slate-50 border-neutral-800 rounded-md dark:hover:bg-neutral-800 hover:text-white duration-100 px-4 py-1"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button className="text-white cursor-pointer bg-indigo-800 hover:bg-indigo-600 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-300 duration-300 px-4 rounded-md py-1">
          Add Group
        </button>
      </div>
    </div>
  );
}
