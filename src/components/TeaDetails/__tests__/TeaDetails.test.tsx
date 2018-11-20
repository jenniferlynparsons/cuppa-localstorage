import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import TeaDetails from "..";

const mockStore = configureStore();
const initialState = {
  tea: {
    id: "868a3ecd-13a0-4381-bc44-ae83e4cec324",
    name: "dfghhgfj",
    brand: "dfgjfhgj",
    teaType: "Green",
    servings: "225",
    edit: true
  },
  teas: [
    {
      id: "868a3ecd-13a0-4381-bc44-ae83e4cec324",
      name: "dfghhgfj",
      brand: "dfgjfhgj",
      teaType: "Green",
      servings: "225",
      edit: true
    },
    {
      id: "85d41130-31a2-4917-94db-e1378c57b7d5",
      name: "esrtert",
      brand: "erttre",
      teaType: "Green",
      servings: "55",
      edit: false
    },
    {
      id: "a8236154-5cf2-44d5-b54d-8cd0849c9d60",
      name: "qrqer",
      brand: "djjhg",
      teaType: "White",
      servings: "45",
      edit: false
    }
  ],
  teaTypes: ["Black", "Green", "White", "Herbal"]
};
const store = mockStore(initialState);

console.log(store);
describe("<TeaDetails />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(<TeaDetails store={store} />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
