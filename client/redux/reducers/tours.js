import {
  GET_ALL_TOURS,
  GET_ALL_SORTING_TOURS,
  GET_TOUR,
  TOURS_LOADING_FAIL,
} from "../types";

const initialState = {
  tours: [],
  oneTour: {},
  sortingTours: [],
  loading: true,
  message: null,
};

export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TOURS:
      return { ...state, tours: action.payload, loading: false };
    case GET_ALL_SORTING_TOURS:
      return { ...state, sortingTours: action.payload, loading: false };
    case GET_TOUR:
      return { ...state, oneTour: action.payload, loading: false };
    case TOURS_LOADING_FAIL:
      return { ...state, loading: true, message: action.payload };
    default:
      return state;
  }
};
