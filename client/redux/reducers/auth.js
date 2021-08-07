import {
  USER_LOADED,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGOUT,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
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
      };
    case LOGIN_FAIL:
    case SIGN_UP_FAIL:
    case LOGOUT:
      return {
        state,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
