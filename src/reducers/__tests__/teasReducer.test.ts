import reducer from "../teasReducer";

const emptyState = [];

const newTea = {
  flash: { name: "", id: "" },
  touched: { name: false, servings: false },
  id: "001",
  name: "Sleepytime",
  brand: "Celestial Seasonings",
  teaType: "Herbal",
  servings: "5",
  edit: false
};

const editedTea = {
  flash: { name: "", id: "" },
  touched: { name: false, servings: false },
  id: "001",
  name: "Sleepy Time",
  brand: "Celestial Seasonings",
  teaType: "Herbal",
  servings: "5",
  edit: false
};

const deletedTea = {
  flash: { name: "", id: "" },
  touched: { name: false, servings: false },
  id: "001",
  name: "Sleepy Time",
  brand: "Celestial Seasonings",
  teaType: "Herbal",
  servings: "5",
  edit: false
};

const initialState = [
  {
    flash: { name: "", id: "" },
    touched: { name: false, servings: false },
    id: "7c596196-8f8a-4649-9df6-35054928489f",
    name: "adf",
    brand: "adf",
    teaType: "Green",
    servings: "2",
    edit: false
  },
  {
    flash: { name: "", id: "" },
    touched: { name: false, servings: false },
    id: "5d7eab7e-6c3a-453d-9794-848b97c93330",
    name: "kjhk",
    brand: "kljhk",
    teaType: "Green",
    servings: "2",
    edit: false
  }
];

const expectedState = [
  {
    flash: { name: "", id: "" },
    touched: { name: false, servings: false },
    id: "7c596196-8f8a-4649-9df6-35054928489f",
    name: "adf",
    brand: "adf",
    teaType: "Green",
    servings: "2",
    edit: false
  },
  {
    flash: { name: "", id: "" },
    touched: { name: false, servings: false },
    id: "5d7eab7e-6c3a-453d-9794-848b97c93330",
    name: "kjhk",
    brand: "kljhk",
    teaType: "Green",
    servings: "2",
    edit: false
  },
  {
    flash: { name: "", id: "" },
    touched: { name: false, servings: false },
    id: "001",
    name: "Sleepytime",
    brand: "Celestial Seasonings",
    teaType: "Herbal",
    servings: "5",
    edit: false
  }
];

const expectedEditState = [
  {
    flash: { name: "", id: "" },
    touched: { name: false, servings: false },
    id: "7c596196-8f8a-4649-9df6-35054928489f",
    name: "adf",
    brand: "adf",
    teaType: "Green",
    servings: "2",
    edit: false
  },
  {
    flash: { name: "", id: "" },
    touched: { name: false, servings: false },
    id: "5d7eab7e-6c3a-453d-9794-848b97c93330",
    name: "kjhk",
    brand: "kljhk",
    teaType: "Green",
    servings: "2",
    edit: false
  },
  {
    flash: { name: "", id: "" },
    touched: { name: false, servings: false },
    id: "001",
    name: "Sleepy Time",
    brand: "Celestial Seasonings",
    teaType: "Herbal",
    servings: "5",
    edit: false
  }
];

describe("teas reducer", () => {
  it("should return the initial state", () => {
    const action = { type: "dummy_action" };
    expect(reducer(undefined, action)).toEqual(emptyState);
  });

  it("should handle ADD_TEA", () => {
    const action = { type: "ADD_TEA", payload: newTea };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle EDIT_TEA", () => {
    const action = { type: "EDIT_TEA", payload: editedTea };
    expect(reducer(expectedState, action)).toEqual(expectedEditState);
  });

  it("should handle DELETE_TEA", () => {
    const action = { type: "DELETE_TEA", payload: deletedTea };
    expect(reducer(expectedEditState, action)).toEqual(initialState);
  });
});
