import React, { useEffect, useRef, useState } from "react";
import { closedTasks, openedTasks } from "../../../dummyData";

const Task = ({ title, description }) => {
  const closedTasks2 = closedTasks;
  const openedTasks2 = openedTasks;

  const [isShown, setIsShown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const inputRef = useRef();
  // const desRef = useRef();

  const handleShowEdit = () => {
    if (!isEdit) {
      setIsShown(true);
    }
  };

  const handleHideEdit = () => {
    setIsShown(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
    setIsShown(false);
  };

  const handleChange = (e) => {
    if (e.key == "Enter") {
      setIsEdit(false);
      setEditedTitle(inputRef.current.value);
      setIsShown(true);
    }
  };

  return (
    <div
      onMouseEnter={handleShowEdit}
      onMouseLeave={handleHideEdit}
      className="flex flex-col bg-light dark:bg-neutral-800 dark:border-2 border-neutral-700 hover:border-neutral-600 duration-100 rounded-lg py-2 select-none h-fit"
    >
      <div className="flex flex-col px-3 relative">
        {isShown && (
          <EditOptions
            handleEdit={handleEdit}
            closedTasks2={closedTasks2}
            openedTasks2={openedTasks2}
          />
        )}
        {isEdit ? (
          <input
            type="text"
            className="border-neutral-500 top-0 outline-none border-b-2 font-semibold text-lg"
            defaultValue={editedTitle}
            autoFocus
            ref={inputRef}
            onKeyPress={handleChange}
          />
        ) : (
          <h3 className="font-semibold">{title}</h3>
        )}

        {/* {isEdit ? (
          <input
            type="text"
            className="border-neutral-500 top-0 outline-none border-b-2 font-semibold text-lg"
            defaultValue={description}
            ref={desRef}
          />
        ) : (
        )} */}
        <p className="opacity-40 font-semibold">{description}</p>
      </div>
      <div className="flex flex-col gap-y-1 px-2">
        <span className="p-[6px] rounded-sm hover:bg-primary/20 w-fit flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </span>
        <span className="p-[6px] rounded-sm hover:bg-primary/20 w-fit flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
            />
          </svg>
        </span>
        <span className="p-[6px] rounded-sm hover:bg-primary/20 w-fit flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Task;

function EditOptions({ handleEdit, closedTasks2, openedTasks2 }) {
  const moveToClosedTask = () => {
    console.log(openedTasks);
    openedTasks2.shift();
  };
  return (
    <div className="bg-neutral-900 border-neutral-700 items-center gap-x-2 flex px-1 py-[0.5px] border-[1px] rounded-lg cursor-pointer absolute right-0.5 -translate-y-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 stroke-neutral-300 p-1 hover:stroke-neutral-100"
        onClick={moveToClosedTask}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 stroke-neutral-300 p-1 hover:stroke-neutral-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 stroke-neutral-300 p-1 hover:stroke-neutral-100"
        onClick={handleEdit}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 stroke-neutral-300 p-1 hover:stroke-neutral-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>
  );
}
