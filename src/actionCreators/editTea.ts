import { Tea } from "../interfaces";

interface EditTea {
  type: "EDIT_TEA";
  payload: Tea;
}

export const editTea = (tea: Tea): EditTea => ({
  type: "EDIT_TEA",
  payload: tea
});
