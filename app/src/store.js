import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { tasksReducer } from "./reducers/tasksReducer";

const middleware = applyMiddleware(thunk);

const store = createStore(tasksReducer, middleware);

export default store;
