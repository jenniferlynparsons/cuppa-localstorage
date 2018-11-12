import { Tea } from "../interfaces";

interface DeleteTea {
  type: "DELETE_TEA";
  payload: Tea;
}

export const deleteTea = (tea: Tea): DeleteTea => ({
  type: "DELETE_TEA",
  payload: tea
});
