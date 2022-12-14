import { createSlice } from "@reduxjs/toolkit";
import socket from "../socketclient";
const axios = require("axios");
const authSlice = createSlice({
	name: "auth",
	initialState: {},
	reducers: {
		_login: (state, action) => {
			console.log("running");
			socket.emit("message", `${action.payload.email} logged in`);
			socket.emit("joinRooms", action.payload.conversations);
			state = action.payload;
			return state;
		},
		_LOGOUT: (state) => {
			socket.emit("message", `${state.email} logged out`);
			window.localStorage.removeItem("token");
			state = {};
			return {};
		},
	},
});
export default authSlice.reducer;
export const { _login, _LOGOUT } = authSlice.actions;
export const attemptTokenLogin = () => async (dispatch) => {
	const token = window.localStorage.getItem("token");
	if (token) {
		const response = await axios.get("/api/auth", {
			headers: {
				authorization: token,
			},
		});
		console.log("run", response);
		dispatch(_login(response.data));
	}
};
export const attemptPasswordLogin = (loginInfo) => async (dispatch) => {
	console.log("slice", loginInfo);
	const response = await axios.post("/api/auth/login", loginInfo);
	const { token } = response.data;
	window.localStorage.setItem("token", token);
	attemptTokenLogin()(dispatch);
};
export const _logout = () => async (dispatch) => {
	console.log("going");
	dispatch(_LOGOUT());
};
