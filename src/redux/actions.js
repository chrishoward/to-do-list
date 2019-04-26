import axios from "axios";

const apiUrl = "http://13.236.116.224:4000";
// const apiUrl = "http://localhost:4000";
const newTask = {
  description: "",
  completed: false
};
const UPDATE_TASKS = "UPDATE_TASKS";

const updateTasksAction = payload => ({
  type: UPDATE_TASKS,
  payload
});

export const getTasks = () => dispatch => {
  console.log("getTasks fired: ");
  axios
    .get(`${apiUrl}/tasks`)
    .then(response => {
      console.log("axios get response: ", response);
      dispatch(updateTasksAction(response.data));
    })
    .catch(error => console.log("axios get error: ", error));
};

export const addTask = () => dispatch => {
  console.log("addTask fired: ");
  axios
    .post(`${apiUrl}/tasks`, newTask)
    .then(response => {
      console.log("axios post response: ", response);
      dispatch(updateTasksAction(response.data));
    })
    .catch(error => console.log("axios post error: ", error));
};

export const updateTask = payload => dispatch => {
  console.log("updateTask fired: ");
  const { id, ...data } = payload;
  console.log("updatetask data ...: ", data);
  axios
    .put(`${apiUrl}/tasks/${id}`, data)
    .then(response => {
      console.log("axios put response: ", response);
      dispatch(updateTasksAction(response.data));
    })
    .catch(error => console.log("axios put error: ", error));
};

export const deleteTask = id => dispatch => {
  console.log("deleteTask fired: ");
  console.log("id: ", id);
  axios
    .delete(`${apiUrl}/tasks/${id}`)
    .then(response => {
      console.log("axios delete response: ", response);
      dispatch(updateTasksAction(response.data));
    })
    .catch(error => console.log("axios delete error: ", error));
};
