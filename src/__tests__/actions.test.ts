import * as actions from "../actions";

describe("actions", () => {
  it("should create an action to add a tea", () => {
    const newTea = {};
    const expectedAction = {
      type: "ADD_TEA",
      payload: newTea
    };
    expect(actions.addTea(newTea)).toEqual(expectedAction);
  });

  it("should create an action to delete a tea", () => {
    const deletedTea = {};
    const expectedAction = {
      type: "DELETE_TEA",
      payload: deletedTea
    };
    expect(actions.deleteTea(deletedTea)).toEqual(expectedAction);
  });

  it("should create an action to edit a tea", () => {
    const editedTea = {};
    const expectedAction = {
      type: "EDIT_TEA",
      payload: editedTea
    };
    expect(actions.editTea(editedTea)).toEqual(expectedAction);
  });
});
