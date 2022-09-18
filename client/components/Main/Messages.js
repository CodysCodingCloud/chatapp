import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

export default function Messages() {
	let messages = useSelector((state) => state.message);
	const bottomRef = useRef(null);

	useEffect(() => {
		console.log(bottomRef);
		bottomRef.current?.scrollIntoView({ behavior: "auto" });
	}, [messages]);
	return (
		<div className="messages">
			{messages.convo ? (
				<>
					<h1>{messages.convo.name}</h1>
					<div>
						{messages.messagelist.map((message) => (
							<Message key={message.id} message={message} />
						))}
						<div ref={bottomRef} />
					</div>
				</>
			) : (
				<h1>there are no messages to display</h1>
			)}
		</div>
	);
}
