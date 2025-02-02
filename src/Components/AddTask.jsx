import React, { useContext, useEffect, useRef, useState } from "react";
import { ShowContext } from "../App";
import { openedTasks } from "../dummyData";

const AddTask = () => {
  const { isShown, setIsShown } = useContext(ShowContext);
  const [isMaximized, setIsMaximized] = useState(false);

  const containerRef = useRef();

  const handleClose = () => {
    setIsShown(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  const handleMaximized = () => {
    setIsMaximized(!isMaximized);
    console.log("done");
  };

  return (
    <div className="bg-black/60 absolute h-full w-full flex top-0 justify-center">
      <div
        ref={containerRef}
        className={`flex flex-col ${
          isMaximized
            ? "h-[800px] w-[1000px] top-0 mt-4"
            : "h-[500px] w-[600px] top-32"
        } bg-white relative dark:bg-neutral-950 dark:border-neutral-800 rounded-lg border-2`}
      >
        <Header
          handleClose={handleClose}
          handleMaximized={handleMaximized}
          isMaximized={isMaximized}
          setIsMaximize={setIsMaximized}
        />

        <Body handleClose={handleClose} />
      </div>
    </div>
  );
};

export default AddTask;

function Header({ handleClose, handleMaximized, isMaximized }) {
  return (
    <div className="items-center flex p-4 pl-8 pr-6 justify-between text-blue-600 dark:text-white font-medium text-xl w-full">
      <h4 className="select-none">Add New Task</h4>
      <div className="flex items-center gap-x-1">
        <span
          onClick={handleMaximized}
          className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer rounded-lg p-2"
        >
          {isMaximized ? (
            <img src="minimize.png" alt="minimize" className="size-4" />
          ) : (
            <img src="maximize.png" alt="maximize" className="size-4" />
          )}
        </span>
        <span
          onClick={handleClose}
          className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer rounded-lg p-2"
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

function Body({ handleClose }) {
  const tasks = openedTasks;
  const titleRef = useRef();
  const descriptionRef = useRef();
  const saveTask = (e) => {
    e.preventDefault();

    tasks.unshift({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      status: "open",
    });
    handleClose();
  };
  return (
    <div className="px-8 pt-5 flex flex-col text-black dark:text-white h-full">
      <form onSubmit={saveTask} className="flex flex-col h-full">
        <div className="flex flex-col">
          <label htmlFor="" className="font-medium text-xs mb-2">
            Task Title
          </label>
          <input
            ref={titleRef}
            type="text"
            className="outline-none border-b-2 dark:border-white px-5 py-2 font-medium border-black/30"
            placeholder="Write title of your task"
            required
            autoFocus
          />
        </div>

        <div className="flex flex-col mt-5 h-52">
          <label htmlFor="" className="font-medium text-xs mb-2">
            Description
          </label>
          <textarea
            ref={descriptionRef}
            type="text"
            className="outline-none border-b-2 dark:border-white px-5 py-2 font-medium border-black/30 h-full resize-none"
            placeholder="What's your task about"
            required
          />
        </div>

        <div className="flex flex-row justify-end relative gap-x-5 font-medium text-xs mt-16">
          <button
            className="text-gray-500 cursor-pointer hover:outline-gray-500 hover:bg-gray-500 dark:bg-transparent dark:border-2 dark:text-slate-50 border-neutral-800 rounded-md dark:hover:bg-neutral-800 hover:text-white duration-100 px-5 py-2"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="text-white cursor-pointer bg-indigo-800 hover:bg-indigo-600 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-300 duration-300 px-5 rounded-md py-2">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
}
