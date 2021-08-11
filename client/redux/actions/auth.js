import {
  USER_LOADING_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGOUT,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
} from "../types";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export function loadUser(){
//    return async(dispatch)=>{

//    }
// }

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
      const token = await AsyncStorage.setItem("token", res.data.token);
      console.log(res.status);
      dispatch({
        type: LOGIN_SUCCES,
        payload: res.data,
        payloadToken: token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await axios({
        method: "GET",
        url: "http://192.168.1.3:8000/api/v1/users/logout",
      });
      await AsyncStorage.removeItem("token");
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
      dispatch({
        type: USER_LOADING_FAIL,
        payload: error.response.data.message,
      });
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
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SIGN_UP_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}
