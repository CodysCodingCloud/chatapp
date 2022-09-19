const { io } = require("socket.io-client");
import { dispatch } from "./components/Login";
// const store = require("./store");
// console.log(store);
import { _socketMessage } from "./store/messageSlice";
let socket = io();

socket.on("connect", () => {
	console.log("hi", socket.id);
});

socket.on("convomsg", (messageObj) => {
	console.log("client got", messageObj);
	dispatch(_socketMessage(messageObj));
});

socket.on("message", (msg) => console.log("received message", msg));

export default socket;
