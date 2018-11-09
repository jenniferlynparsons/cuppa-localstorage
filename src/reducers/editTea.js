export default function editTeaReducer(state = "default state", action) {
  if (action.type === "EDIT_TEA") {
    // TODO figure out teas: action.payload
    // should return an updated
    return action.payload;
  } else {
    return state;
  }
}
