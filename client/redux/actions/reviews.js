import { GET_ALL_REVIEWS } from "../types";

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
      console.log(error);
    }
  };
}
