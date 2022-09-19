module.exports = function (io) {
	io.on("connection", (socket) => {
		console.log("a user connected");
		socket.on("message", (message) => {
			console.log(message);
		});
		socket.on("convomsg", (messageObj) => {
			socket.emit("message", "msg sent");
			socket.broadcast
				.to(messageObj.conversationId)
				.emit("convomsg", messageObj);
		});
		socket.on("joinRooms", (rooms) => {
			rooms.map((room) => {
				socket.join(room.id);
			});
		});
	});
	// io.broadcast
	io.on("disconnect", () => console.log("byew", socket.id));
};
