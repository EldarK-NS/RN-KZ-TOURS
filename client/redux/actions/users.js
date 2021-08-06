import { GET_ALL_USERS } from "../types";

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
      console.log(error);
    }
  };
}
