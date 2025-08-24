"use client";

import { createContext, useContext, useState } from "react";

export const TasksContext = createContext(null);

export const useTask = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
