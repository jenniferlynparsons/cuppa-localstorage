import { createStore, combineReducers } from "redux";
import teas from "./reducers/teasReducer";
import teaTypes from "./reducers/typesReducer";
import { loadTeas, saveTeas } from "./storage";

const persistedState = loadTeas();
const store = createStore(combineReducers({ teas, teaTypes }), persistedState);

store.subscribe(() => {
  saveTeas(store.getState());
});

export default store;
