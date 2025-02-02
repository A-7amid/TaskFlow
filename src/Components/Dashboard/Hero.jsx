import React, { useContext, useEffect, useRef, useState } from "react";
import { ShowContext } from "../../App";

const Hero = () => {
  const { isShown, setIsShown } = useContext(ShowContext);
  const [search, setSearch] = useState("");

  const searchRef = useRef();
  const deleteRef = useRef();

  const handleAddTask = () => {
    setIsShown(true);
  };

  const handleSearch = () => {
    setSearch(searchRef.current.value);

    deleteRef.current.style.display = "block";
    searchRef.current.style.display = "none";
  };

  const handleDelete = () => {
    setSearch("");
    deleteRef.current.style.display = "none";
    searchRef.current.style.display = "block";
  };

  return (
    <div className="flex mx-8 flex-col mr-36">
      <div className="flex justify-between w-full mb-5">
        <h1 className="text-[25px] font-semibold dark:text-neutral-200">
          My Todo
        </h1>

        <button
          onClick={handleAddTask}
          className="px-2 py-1 flex bg-primary dark:bg-yellow-600/70 dark:hover:bg-orange-300/60 rounded-md text-white duration-300 cursor-pointer items-center gap-x-2"
        >
          <img src="white-add.png" alt="add" className="size-4 mb-[2px]" />
          New Task
        </button>
      </div>

      <div className="flex justify-between select-none">
        <label className="input relative">
          <input
            type="text"
            name="input"
            value={search}
            className="outline-hidden pt-[1px] mr-8"
            placeholder="Search"
            onChange={handleSearch}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer absolute top-[5px] right-2 stroke-1 hover:stroke-2 duration-100"
            ref={searchRef}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <img
            onClick={handleDelete}
            ref={deleteRef}
            src="/delete.png"
            alt="delete"
            className="size-3 absolute top-3 right-3 hidden cursor-pointer"
          />
        </label>

        <div className="gap-x-4 flex">
          <input type="date" className="input" />
          <input type="date" className="input" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
