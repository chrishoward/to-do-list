import axios from "axios";

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
    .get("http://13.236.116.224:4000/tasks")
    .then(response => {
      console.log("axios get response: ", response);
      dispatch(updateTasksAction(response.data));
    })
    .catch(error => console.log("axios get error: ", error));
};

export const addTask = () => dispatch => {
  console.log("addTask fired: ");
  axios
    .post("http://13.236.116.224:4000/tasks")
    .then(response => {
      console.log("axios post response: ", response);
      dispatch(updateTasksAction(response.data));
    })
    .catch(error => console.log("axios get error: ", error));
};

// export const getTasks = () => dispatch => {
//   console.log("getTasks fired: ");
//   axios
//     .get("http://13.236.116.224:4000/tasks")
//     .then(response => {
//       console.log("axios get response: ", response);
//       dispatch(updateTasksAction(response.data));
//     })
//     .catch(error => console.log("axios get error: ", error));
// };

// export const getTasks = () => dispatch => {
//   console.log("getTasks fired: ");
//   axios
//     .get("http://13.236.116.224:4000/tasks")
//     .then(response => {
//       console.log("axios get response: ", response);
//       dispatch(updateTasksAction(response.data));
//     })
//     .catch(error => console.log("axios get error: ", error));
// };
