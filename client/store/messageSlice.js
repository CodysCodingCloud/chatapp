import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const messageSlice = createSlice({
	name: "message",
	initialState: {},
	reducers: {
		GETMESSAGES: (state, action) => {
			console.log(action.payload);
			state.convo = action.payload.convo;
			state.messagelist = action.payload.messages;
			return state;
		},
		AddMESSAGE: (state, action) => {
			state.messages.push(action.payload);
			return state;
		},
	},
});
export default messageSlice.reducer;
export const { GETMESSAGES, ADDMESSAGES } = messageSlice.actions;
export const _getMesages = (convo) => async (dispatch) => {
	const { data: messages } = await axios.get("/api/messages", {
		headers: { payload: JSON.stringify(convo) },
	});
	dispatch(GETMESSAGES({ convo, messages }));
};
export const _addMessage = (newMessage) => async (dispatch) => {
	await axios.post("/api/messages", newMessage);
	dispatch(GETMESSAGES(messages));
};
