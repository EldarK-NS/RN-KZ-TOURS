import {
  USER_LOADED,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
} from "../types";
import axios from "axios";
import setAuthToken from "./../../utils/setAuthToken";
import AsyncStorage from "@react-native-async-storage/async-storage";

// //Load user(token)
// export const loadUser = () => async (dispatch) => {};

export function login(email, password) {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://192.168.1.3:8000/api/v1/users/login",
        data: {
          email,
          password,
        },
      });
      await AsyncStorage.setItem("token", res.data.token);
      // console.log(res.data);
      dispatch({
        type: LOGIN_SUCCES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
}

export function signUp(name, email, password, passwordConfirm) {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://192.168.1.3:8000/api/v1/users/signup",
        data: {
          name,
          email,
          password,
          passwordConfirm,
        },
      });
      await AsyncStorage.setItem("token", res.data.token);
      console.log(res.data);
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({
        type: SIGN_UP_FAIL,
      });
    }
  };
}
