"use client";

import { createContext, useContext, useState } from "react";

export const TasksContext = createContext(null);

export const useTask = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [task, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ task, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
