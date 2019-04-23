const dummyData = [
  { id: 1, description: "Milk", completed: false },
  { id: 2, description: "Eggs", completed: true },
  { id: 3, description: "Bread", completed: false }
];

const initialState = {
  tasks: dummyData
};

export const tasksReducer = (state = initialState, actions) => {
  state = { ...state, somethingElseHere };
  return state;
};
