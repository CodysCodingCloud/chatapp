import React from "react";
import Conversation from "./Conversation";
import MiniProfile from "./MiniProfile";
export default function SideBar() {
	return (
		<div id="sideBar">
			<h1>ChatAPP</h1>
			<Conversation />
			<MiniProfile />
		</div>
	);
}
