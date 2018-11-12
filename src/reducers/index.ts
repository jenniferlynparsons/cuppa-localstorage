import { combineReducers } from "redux";
import addTea from "./addTea";
import editTea from "./editTea";
import deleteTea from "./deleteTea";

export default combineReducers({
  addTea,
  editTea,
  deleteTea
});
