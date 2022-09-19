import React from "react";
import { useDispatch } from "react-redux";
import { _getMesages } from "../../store/messageSlice";
export default function ConversationItem({ unread, conversation }) {
	const dispatch = useDispatch();
	function loadConverstaions() {
		dispatch(_getMesages(conversation));
	}
	return <li onClick={loadConverstaions}>{conversation.name}</li>;
}
