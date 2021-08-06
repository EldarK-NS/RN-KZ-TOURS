import { GET_ALL_TOURS, SHOW_LOADER, HIDE_LOADER } from "../types";

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};
export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export function getAllTours() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch("http://192.168.1.3:8000/api/v1/tours");
      const { data } = await response.json();
      dispatch({
        type: GET_ALL_TOURS,
        payload: data,
      });
      dispatch(hideLoader());
    } catch (error) {
      console.log(error);
    }
  };
}
