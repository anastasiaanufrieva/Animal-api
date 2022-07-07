import { GET_CAT, GET_DOG } from "../types/types";

const initState = { cat: '', dog: '' }

const animalReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CAT:
      return { ...state, cat: payload };

    case GET_DOG:
      return { ...state, dog: payload };

    default:
      return state
  }
}
export default animalReducer;
