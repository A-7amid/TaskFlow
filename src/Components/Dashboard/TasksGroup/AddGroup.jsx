import React, { useContext, useRef } from "react";
import { AddGroupContext } from "../../../App";

const AddGroup = () => {
  const { setIsCreateGroup } = useContext(AddGroupContext);

  const GroupButton = () => {
    setIsCreateGroup(true);

    console.log("hi");
  };

  return (
    <div className="ml-3 w-28">
      <button
        onClick={GroupButton}
        type="button"
        className="opacity-80 font-medium text-xs cursor-pointer"
      >
        + Add group
      </button>
    </div>
  );
};

export default AddGroup;
