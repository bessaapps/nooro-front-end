"use client";

import { useEffect } from "react";
import { getTasksAPI } from "@/utils/api";
import { useTask } from "@/context/TasksContext";

export default function TasksLoader() {
  const { setTasks } = useTask();

  useEffect(() => {
    getTasksAPI()
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return null;
}
