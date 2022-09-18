import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import authReducer from "./authSlice";
import messageReducer from "./messageSlice";
export default configureStore({
	reducer: {
		auth: authReducer,
		message: messageReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(loggerMiddleware),
});
