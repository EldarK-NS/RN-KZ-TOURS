import { GET_ALL_REVIEWS } from "../types";

const initialState = {
  reviews: [],
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};
