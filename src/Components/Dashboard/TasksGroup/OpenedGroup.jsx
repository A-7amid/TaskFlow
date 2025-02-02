import { useContext, useState } from "react";
import Status from "./Status";
import React from "react";
import Task from "./Task";
import { ShowContext } from "../../../App";
import { openedTasks } from "../../../dummyData";

const OpenedGroup = ({
  status,
  color,
  points,
  statusImage,
  bgColor,
  bgDarkColor,
  hover,
  darkColor,
  darkHover,
}) => {
  const { isShown, setIsShown } = useContext(ShowContext);
  const tasks = openedTasks;
  const number = tasks.length;

  const handleAddTask = (e) => {
    setIsShown(true);
  };

  return (
    <div
      className={`flex flex-col ${bgColor} ${bgDarkColor} h-fit rounded-lg pt-1 px-1 w-96`}
    >
      <Status
        handleAddTask={handleAddTask}
        statusImage={statusImage}
        points={points}
        status={status}
        statusColor={color}
        hover={hover}
        darkColor={darkColor}
        darkHover={darkHover}
        number={number}
      />

      <div className="gap-y-1 flex flex-col">
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>

      <span
        onClick={handleAddTask}
        className={`font-semibold cursor-pointer opacity-60 ml-2 text-xs py-3 hover:opacity-80 duration-100`}
      >
        <span className="font-semibold text-xl">+</span> Add Task
      </span>
    </div>
  );
};

export default OpenedGroup;
