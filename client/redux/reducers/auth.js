import {
  USER_LOADING_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGOUT,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOAD_USER,
  LOAD_USER_ERROR,
} from "../types";

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  message: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCES:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        token: action.payload,
      };
    case LOGIN_FAIL:
    case SIGN_UP_FAIL:
    case LOGOUT:
    case USER_LOADING_FAIL:
      return {
        state,
        isAuthenticated: false,
        loading: false,
        message: action.payload,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
