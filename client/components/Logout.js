import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { _logout } from "../store/authSlice";
export default function Logout() {
	const dispatch = useDispatch();
	function logout() {
		dispatch(_logout());
	}
	return (
		<button onClick={logout} className="logout">
			Logout
		</button>
	);
}
