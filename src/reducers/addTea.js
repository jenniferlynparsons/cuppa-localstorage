export default function addTeaReducer(state = "default state", action) {
  if (action.type === "ADD_TEA") {
    // TODO figure out teas: action.payload
    return action.payload;
  } else {
    return state;
  }
}
