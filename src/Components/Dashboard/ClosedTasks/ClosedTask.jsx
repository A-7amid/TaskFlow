import React from "react";

const ClosedTask = ({ title }) => {
  return (
    <div className="flex flex-col bg-light dark:bg-neutral-800 dark:border-2 border-neutral-700 rounded-lg py-2 cursor-pointer select-none px-2 h-12">
      <s className="font-semibold opacity-65">{title}</s>
    </div>
  );
};

export default ClosedTask;
