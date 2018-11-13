import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import teas from "./reducers/teasReducer";
import teaTypes from "./reducers/typesReducer";

const store = createStore(
  combineReducers({ teas, teaTypes }),
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
