import {
  GET_ALL_REVIEWS,
  GET_REVIEWS_FROM_TOUR,
  REVIEWS_LOADING_FAIL,
} from "../types";

export function getAllReviews() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://192.168.1.3:8000/api/v1/reviews");
      const { data } = await response.json();
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REVIEWS_LOADING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}
export function getReviewsFromTour(tourID) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://192.168.1.3:8000/api/v1/tours/${tourID}/reviews`
      );
      const { data } = await response.json();
      dispatch({
        type: GET_REVIEWS_FROM_TOUR,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REVIEWS_LOADING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}
