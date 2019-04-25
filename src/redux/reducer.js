const initialState = {
  tasks: []
};

export const reducer = (state = initialState, actions) => {
  if (actions.type === "UPDATE_TASKS") {
    state = { ...state, tasks: actions.payload };
  }
  return state;
};
