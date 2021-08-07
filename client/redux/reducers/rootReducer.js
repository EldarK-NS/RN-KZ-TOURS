import { combineReducers } from "redux";
import { toursReducer } from "./tours";
import { appReducer } from "./appReducer";
import { usersReducer } from "./users";
import { reviewsReducer } from "./reviews";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  tours: toursReducer,
  app: appReducer,
  users: usersReducer,
  reviews: reviewsReducer,
  auth: authReducer,
});
