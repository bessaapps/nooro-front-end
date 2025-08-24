import axios from "axios";

// TASKS

export const createTaskAPI = (data) =>
  axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, data)
    .then((response) => response);

export const getTasksAPI = () =>
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`)
    .then((response) => response);

export const updateTaskAPI = (data) =>
  axios
    .patch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, data)
    .then((response) => response);

export const deleteTaskAPI = (params) =>
  axios
    .delete(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, { params })
    .then((response) => response);
