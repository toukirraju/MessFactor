import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import apartmentReducer from "./slices/apartmentSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
    // moderator: moderatorReducer,
    moderator: apartmentReducer,
  },
});
