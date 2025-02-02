import React from "react";
import ClosedTask from "./ClosedTask";
import { closedTasks } from "../../../dummyData";

const ClosedGroup = () => {
  const tasks = closedTasks;
  const number = tasks.length;

  return (
    <div
      className={`flex flex-col dark:bg-lime-600/5 bg-green/50 rounded-lg pt-1 px-1 w-80 pb-1`}
    >
      <ClosedStatus
        statusColor="bg-green"
        darkColor="dark:bg-lime-600/80"
        statusImage="checked.png"
        status="closed"
        number={number}
      />

      <div className="gap-y-1 flex flex-col">
        {tasks.map((task) => (
          <ClosedTask title={task.title} />
        ))}
      </div>
    </div>
  );
};

export default ClosedGroup;

function ClosedStatus({ statusColor, statusImage, status, darkColor, number }) {
  return (
    <div className="flex justify-between items-center mb-1 cursor-default">
      <div className="flex flex-row items-center">
        <span
          className={`text-xs font-medium ${statusColor} ${darkColor} flex flex-row rounded-md items-center px-2 justify-center py-1`}
        >
          <img src={statusImage} alt="status" className={`size-4 mr-1`} />
          {status}
        </span>

        <span className="text-zinc-500 ml-3">{number}</span>
      </div>

      <div className={`flex gap-x-3 items-center opacity-50 mr-2`}>
        <img
          src="more.png"
          alt="more options"
          className={`size-3 cursor-pointer hover:${statusColor}`}
        />
      </div>
    </div>
  );
}
