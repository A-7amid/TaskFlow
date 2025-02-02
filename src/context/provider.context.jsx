import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { openedTasks } from "../dummyData";

const TasksContext = createContext();

const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within a PostProvider");
  }

  return context;
};

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(openedTasks);

  const createTask = useCallback((task) => {
    setTasks([task, ...tasks]);
  });

  const values = useMemo(
    () => ({ tasks, setTasks, createTask }),
    [tasks, setTasks, createTask]
  );

  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};

export { TasksProvider, usePosts };
