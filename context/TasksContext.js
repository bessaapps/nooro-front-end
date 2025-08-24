"use client";

import { createContext, useContext, useState } from "react";

export const TasksContext = createContext(null);

export const useTask = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [task, setTaks] = useState([]);

  return (
    <TasksContext.Provider value={{ task, setTaks }}>
      {children}
    </TasksContext.Provider>
  );
};
