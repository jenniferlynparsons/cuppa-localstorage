import { createStore, compose, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
import teas from "./reducers/teasReducer";
import teaTypes from "./reducers/typesReducer";
import { loadTeas, saveTeas } from "./storage";

const persistedState = loadTeas();

const store = createStore(
  combineReducers({ teas, teaTypes }),
  compose(
    applyMiddleware(persistedState),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

store.subscribe(() => {
  saveTeas(store.getState());
});

export default store;
