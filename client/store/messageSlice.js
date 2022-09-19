import { createSlice } from "@reduxjs/toolkit";
import socket from "../socketclient";
const axios = require("axios");
const messageSlice = createSlice({
	name: "message",
	initialState: { unread: [] },
	reducers: {
		CONVOLIST: (state, action) => {
			state.convoList = action.payload;
			return state;
		},
		GETMESSAGES: (state, action) => {
			console.log(action.payload);
			state.convo = action.payload.convo;
			state.messagelist = action.payload.messages;
			return state;
		},
		AddMESSAGE: (state, action) => {
			state.messagelist.push(action.payload);
			return state;
		},
		CHECKMESSAGE: (state, action) => {
			const conversationId = action.payload.conversationId;
			if (state.convo.id == conversationId) {
				state.messagelist.push(action.payload);
			} else {
				state.unread.push(action.payload);
			}
			return state;
		},
	},
});
export default messageSlice.reducer;
export const { CONVOLIST, GETMESSAGES, AddMESSAGE, CHECKMESSAGE } =
	messageSlice.actions;
export const _getMesages = (convo) => async (dispatch) => {
	const { data: messages } = await axios.get("/api/messages", {
		headers: { payload: JSON.stringify(convo) },
	});
	dispatch(GETMESSAGES({ convo, messages }));
};
export const _addMessage = (newMessageObj) => async (dispatch) => {
	let { data: newMsg } = await axios.post("/api/messages", newMessageObj);
	socket.emit("convomsg", newMsg);
	dispatch(AddMESSAGE(newMsg));
};
export const _socketMessage = (socketMsg) => async (dispatch) => {
	console.log("run sockert");
	dispatch(CHECKMESSAGE(socketMsg));
};
// export const getconvolist = () => async (dispatch) => {
// 	const { data: convoList } = await axios.get("/api/user/list");
// 	dispatch(CONVOLIST(convoList));
// };
