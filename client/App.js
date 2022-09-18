import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { attemptTokenLogin } from "./store/authSlice";
import Welcome from "./components/Welcome";
export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(attemptTokenLogin());
	}, []);
	const loginToken = useSelector((state) => {
		return state.auth;
	});
	return (
		<div>{loginToken.id ? <Welcome loginToken={loginToken} /> : <Login />}</div>
	);
}
