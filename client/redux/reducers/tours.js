import { GET_ALL_TOURS } from "../types";

const initialState = {
  tours: [],
};

export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TOURS:
      return { ...state, tours: action.payload };
    default:
      return state;
  }
};
