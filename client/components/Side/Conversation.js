import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ConversationItem from "./ConversationItem";
import { getconvolist } from "../../store/messageSlice";
export default function Conversation() {
	// let dispatch = useDispatch();
	let conversations = useSelector((state) => state.auth.conversations);
	// dispatch(getconvolist(conversations));
	// let conversations = useSelector((state) => state.message.convoList);
	let unread = useSelector((state) => state.message.unread);

	return (
		<ul className="convolist">
			<li>Conversations</li>
			{conversations.map((conversation) => (
				<ConversationItem
					key={conversation.name}
					unread={unread}
					conversation={conversation}
				/>
			))}
		</ul>
	);
}
