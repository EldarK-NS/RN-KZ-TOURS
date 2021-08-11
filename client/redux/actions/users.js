import {
  GET_ALL_USERS,
  ADD_TOUR_TO_FAVORITE,
  REMOVE_TOUR_FROM_FAVORITE,
  GET_USER,
  USER_LOADING_FAIL,
  TOUR_ADD_FAIL,
} from "../types";
import axios from "axios";

export function getAllUsers() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://192.168.1.3:8000/api/v1/users");

      const { data } = await response.json();
      dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_LOADING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}
export function getUser(userID) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://192.168.1.3:8000/api/v1/users/${userID}`
      );
      const { data } = await response.json();
      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_LOADING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}

export function addTourToFavorite(tourId) {
  return async (dispatch) => {
    try {
      await axios.put(
        "http://192.168.1.3:8000/api/v1/users/updateMe/addToFavorite",
        { tourId: tourId }
      );
      dispatch({
        type: ADD_TOUR_TO_FAVORITE,
      });
    } catch (error) {
      dispatch({
        type: TOUR_ADD_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}
export function removeTourFromFavorite(tourId) {
  return async (dispatch) => {
    try {
      await axios.put(
        "http://192.168.1.3:8000/api/v1/users/updateMe/removeFromFavorite",
        { tourId }
      );
      dispatch({
        type: REMOVE_TOUR_FROM_FAVORITE,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_LOADING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}
