import React from "react";
export default function TextArea({ message }) {
	return (
		<form className="message-textarea">
			<textarea></textarea>
			<button type="submit">↑</button>
		</form>
	);
}
