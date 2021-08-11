import {
  GET_ALL_TOURS,
  GET_TOUR,
  GET_ALL_SORTING_TOURS,
  TOURS_LOADING_FAIL,
} from "../types";

export function getAllTours() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://192.168.1.3:8000/api/v1/tours");
      const { data } = await response.json();
      dispatch({
        type: GET_ALL_TOURS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOURS_LOADING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}
export function getTour(tourID) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://192.168.1.3:8000/api/v1/tours/${tourID}`
      );
      const { data } = await response.json();
      dispatch({
        type: GET_TOUR,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOURS_LOADING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}

export function getAllSortingTours(param) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://192.168.1.3:8000/api/v1/tours?sort=${param}`
      );
      const { data } = await response.json();
      dispatch({
        type: GET_ALL_SORTING_TOURS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOADING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}
