import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ConversationItem from "./ConversationItem";
export default function Conversation() {
	// let conversations = [{ name: "mainconvo" }, { name: "subconvo" }];
	let conversations = useSelector((state) => state.auth.conversations);
	return (
		<ul className="convolist">
			<li>Conversations</li>
			{conversations.map((conversation) => (
				<ConversationItem key={conversation.name} conversation={conversation} />
			))}
		</ul>
	);
}
