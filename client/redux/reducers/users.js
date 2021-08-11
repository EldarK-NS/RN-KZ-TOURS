import {
  GET_ALL_USERS,
  ADD_TOUR_TO_FAVORITE,
  REMOVE_TOUR_FROM_FAVORITE,
  GET_USER,
  USER_LOADING_FAIL,
  TOUR_ADD_FAIL,
} from "../types";

const initialState = {
  users: [],
  loading: true,
  message: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
    case GET_ALL_USERS:
    case ADD_TOUR_TO_FAVORITE:
    case REMOVE_TOUR_FROM_FAVORITE:
      return { ...state, users: action.payload, loading: false, message: null };
    case USER_LOADING_FAIL:
    case TOUR_ADD_FAIL:
      return {
        ...state,
        loading: true,
        message: action.payload,
      };
    default:
      return state;
  }
};
