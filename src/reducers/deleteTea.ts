export default function deleteTeaReducer(state = "default state", action) {
  if (action.type === "DELETE_TEA") {
    // TODO figure out teas: action.payload
    return action.payload;
  } else {
    return state;
  }
}
