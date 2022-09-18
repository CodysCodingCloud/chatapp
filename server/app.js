const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

// api route
app.use("/api", require("./api"));

// error handling
app.use(function (req, res, next) {
	const err = new Error("Not found.");
	err.status = 404;
	next(err);
});
app.use(function (err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || "Internal server error.");
});
app.get("*", (req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
