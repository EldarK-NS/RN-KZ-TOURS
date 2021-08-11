import {
  GET_ALL_REVIEWS,
  GET_REVIEWS_FROM_TOUR,
  REVIEWS_LOADING_FAIL,
} from "../types";

const initialState = {
  reviews: [],
  loading: true,
  message: null,
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_FROM_TOUR:
    case GET_ALL_REVIEWS:
      return { ...state, reviews: action.payload, loading: false };
    case REVIEWS_LOADING_FAIL:
      return {
        ...state,
        loading: true,
        message: action.payload,
      };
    default:
      return state;
  }
};
