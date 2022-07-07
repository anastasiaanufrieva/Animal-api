import { ADD_TO_FAV, GET_FAV } from "../types/types";

const favouriteReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {

    case ADD_TO_FAV:
      return [...payload, ...state];

    case GET_FAV:
      return payload

    default:
      return state
  }
}
export default favouriteReducer;
