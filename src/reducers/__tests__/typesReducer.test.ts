import reducer from "../typesReducer";

const sampleState = ["Black", "Green", "White", "Herbal"];

describe("types reducer", () => {
  it("should return the tea types", () => {
    const action = { type: "dummy_action" };
    expect(reducer(undefined, action)).toEqual(sampleState);
  });
});
