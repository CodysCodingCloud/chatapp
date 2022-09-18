import React from "react";
export default function Message({ message }) {
	return (
		<div className="message">
			<p className="userName">{message.user.email} :</p>
			<p className="message-content"> {message.message}</p>
			<p className="datetime">{message.createdAt}</p>
		</div>
	);
}
