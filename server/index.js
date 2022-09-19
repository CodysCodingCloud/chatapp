const express = require("express");
const app = require("./app");
const db = require("./db");
const http = require("http");
const https = require("https");
const { Server } = require("socket.io");

const port = process.env.PORT || 3000;
async function init() {
	try {
		await db.syncAndSeed();
		console.log("db synced");
	} catch (error) {
		console.log(error);
	}
	const httpServer = http.createServer(app);
	const io = new Server(httpServer, {});
	require("./socketserver")(io);
	httpServer.listen(port, () =>
		console.log(`listening on http://localhost:${port}\n`)
	);
}

init();
