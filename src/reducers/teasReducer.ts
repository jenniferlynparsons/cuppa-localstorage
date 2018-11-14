import { Tea, Action } from "../interfaces";

export default (state: Tea[] = [], action: Action): Tea[] => {
  switch (action.type) {
    case "ADD_TEA":
      // return new state with new array for all three actions
      console.log("state ", state);
      console.log("action ", action);
      console.log("payload ", action.payload);
      return [...state, action.payload];
    // case "EDIT_TEA":
    //   return state.map(t => (t.id === action.payload.id ? action.payload : t));
    // case "DELETE_TEA":
    //   return state.filter(t => t.id !== action.payload.id);
  }
  return state;
};
