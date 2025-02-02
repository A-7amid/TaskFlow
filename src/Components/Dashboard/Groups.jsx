import AddGroup from "./TasksGroup/AddGroup";
import React from "react";
import ClosedGroup from "./ClosedTasks/ClosedGroup";
import OpenedGroup from "./TasksGroup/OpenedGroup";
import InProgressGroup from "./TasksGroup/InProgressGroup";
import { addedGroups } from "../../dummyData";

const Groups = () => {
  return (
    <div className="flex flex-row overflow-auto relative ">
      <div className="flex flex-row mt-24 ml-5 gap-x-4 mr-52 mb-4">
        <OpenedGroup
          status="open"
          dum
          bgColor="bg-blue/30"
          bgDarkColor="dark:bg-neutral-800"
          color="bg-blue"
          darkColor="dark:bg-neutral-600"
          statusImage="points.png"
          hover="hover:bg-blue/50"
          darkHover="dark:hover:bg-neutral-700"
        />
        <InProgressGroup
          status="in progress"
          bgColor="bg-yellow/30"
          bgDarkColor="dark:bg-purple-700/5"
          darkColor="dark:bg-purple-700/80"
          color="bg-yellow"
          statusImage="points.png"
          hover="hover:bg-yellow/50"
          darkHover="dark:hover:bg-purple-600/20"
        />

        <div className="gap-y-1 flex flex-col">
          <ClosedGroup />
        </div>

        {/* {addedGroups.map((group) => {})} */}

        <AddGroup />
      </div>
    </div>
  );
};

export default Groups;
