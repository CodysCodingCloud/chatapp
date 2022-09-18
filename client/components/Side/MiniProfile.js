import React from "react";
import { useSelector } from "react-redux";
import Logout from "../Logout";
export default function MiniProfile() {
	let profile = useSelector((state) => state.auth);

	return (
		<div id="mini-profile">
			<h3>Hello {profile.firstName}</h3>
			<h1>{profile.email}</h1>
			<Logout />
		</div>
	);
}
