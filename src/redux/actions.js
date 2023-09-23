import { nanoid } from "nanoid";




export const addTask = newContact => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      name: newContact.name,
      number:newContact.nunber,
    },
  };
};
export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};
