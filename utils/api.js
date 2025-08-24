import axios from "axios";

// TASKS

export const createTaskAPI = (data) =>
  axios.post("/tasks", { data }).then((response) => response);

export const getTasksAPI = () =>
  axios.get("/tasks").then((response) => response);

export const updateTaskAPI = (data) =>
  axios.patch("/tasks", data).then((response) => response);

export const deleteTaskAPI = (params) =>
  axios.delete("/tasks", { params }).then((response) => response);
