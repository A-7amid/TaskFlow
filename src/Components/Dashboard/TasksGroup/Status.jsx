import React, { useState } from "react";

const Status = ({
  status,
  statusColor,
  statusImage,
  handleAddTask,
  hover,
  darkColor,
  darkHover,
  number,
}) => {
  const [isShown, setIsShown] = useState(false);

  const handleOptions = () => {
    setIsShown(true);
  };

  const handleCancelOptions = () => {
    setIsShown(false);
  };

  return (
    <div className="flex justify-between items-center mb-1 cursor-default">
      <div className="flex flex-row items-center">
        <span
          className={`text-xs font-medium ${darkColor} uppercase ${statusColor} flex flex-row rounded-md items-center px-2 pr-3 justify-center py-1`}
        >
          <img src={statusImage} alt="status" className={`size-4 mr-1`} />
          {status}
        </span>

        <span className="text-zinc-500 ml-3">{number}</span>
      </div>

      <div className={`flex gap-x-3 items-center mr-2`}>
        <span
          onMouseEnter={handleOptions}
          onMouseLeave={handleCancelOptions}
          className={`p-1 ${hover} ${darkHover} rounded-sm duration-100 relative`}
        >
          <img
            src="more.png"
            alt="more options"
            className={`size-3 cursor-pointer dark:hidden`}
          />
          <img
            src="options.png"
            alt="more options"
            className={`size-4 cursor-pointer hidden dark:block opacity-70`}
          />
          <div>
            {isShown && (
              <div className="flex flex-row absolute items-start justify-center -translate-y-[14px] translate-x-4 rounded-xs hover:bg-gray-600 cursor-pointer bg-gray-700 h-fit w-fit text-white">
                <div className="border-b flex border-black/30 items-start justify-center w-full px-4 py-2">
                  <span className="">Delete</span>
                </div>
              </div>
            )}
          </div>
        </span>
        <span className={`p-1 ${hover} ${darkHover} rounded-sm duration-100`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 stroke-1 cursor-pointer text-zinc-300"
            onClick={handleAddTask}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Status;
