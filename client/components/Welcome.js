import React from "react";
import { _logout } from "../store/authSlice";

import SideBar from "./Side/SideBar";
import MainArea from "./Main/MainArea";
export default function Welcome() {
	return (
		<div className="container">
			<SideBar />
			<MainArea />
		</div>
	);
}
