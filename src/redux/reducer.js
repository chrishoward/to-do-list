export const reducer = (state = {}, actions) => {
  if (actions.type === "UPDATE_TASKS") {
    state = { ...state, tasks: actions.payload };
  }
  return state;
};
