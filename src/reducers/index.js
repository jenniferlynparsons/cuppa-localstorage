import { combineReducers } from "redux";
import addTea from "./addTea";
import editTea from "./editTea";

export default combineReducers({
  addTea,
  editTea,
  deleteTea
});
