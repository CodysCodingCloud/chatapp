import React from "react";
import Messages from "./Messages";
import TextArea from "./TextArea";
export default function MainArea() {
	return (
		<div id="main-area" className="messages">
			<Messages />
			<TextArea />
		</div>
	);
}
