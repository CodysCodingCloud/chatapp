import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { _addMessage } from "../../store/messageSlice";

export default function TextArea() {
	const [message, setMessage] = React.useState("");
	// const [error, setError] = React.useState({});
	const dispatch = useDispatch();
	let userId = useSelector((state) => state.auth.id);
	let conversationId = useSelector((state) => state.message.convo);

	function handleChange(e) {
		setMessage(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (message.length > 0) {
			console.log("um", userId, conversationId);
			dispatch(
				_addMessage({ message, userId, conversationId: conversationId.id })
			);
			setMessage("");
		}
	}
	return (
		<form className="message-textarea" onSubmit={(e) => handleSubmit(e)}>
			<textarea value={message} onChange={(e) => handleChange(e)}></textarea>
			<button type="submit">↑</button>
		</form>
	);
}
