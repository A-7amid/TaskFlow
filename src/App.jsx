import React from "react";
import { createContext, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar";
import AddTask from "./Components/AddTask";
import CreateGroup from "./Components/Dashboard/TasksGroup/CreateGroup";

export const ShowContext = createContext();
export const AddGroupContext = createContext();

function App() {
  const [isShown, setIsShown] = useState(false);
  const [isCreateGroup, setIsCreateGroup] = useState(false);

  return (
    <AddGroupContext.Provider value={{ setIsCreateGroup }}>
      <ShowContext.Provider value={{ isShown, setIsShown }}>
        <div
          className={`min-h-screen dark:bg-neutral-900 dark:text-white bg-white
             max-h-full overflow-hidden relative`}
        >
          <div className="flex">
            <Navbar />
            <Dashboard />
          </div>
          {isShown && <AddTask />}
          {isCreateGroup && <CreateGroup />}
        </div>
      </ShowContext.Provider>
    </AddGroupContext.Provider>
  );
}

export default App;
