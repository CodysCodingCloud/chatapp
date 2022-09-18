const express = require("express");
const app = require("./app");
const db = require("./db");

const port = process.env.PORT || 3000;
async function init() {
	try {
		await db.syncAndSeed();
		console.log("db synced");
	} catch (error) {
		console.log(error);
	}

	app.listen(port, () =>
		console.log(`listening on http://localhost:${port}\n`)
	);
}

init();
