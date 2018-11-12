import { Tea } from "../interfaces";

interface AddTea {
  type: "ADD_TEA";
  payload: Tea;
}

export const addTea = (tea: Tea): AddTea => ({ type: "ADD_TEA", payload: tea });
