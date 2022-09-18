const Sequelize = require("sequelize");
const db = require("./db");

const Conversation = db.define("conversation", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue: "/Logo_jasmine green.png",
	},
	creatorId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});
module.exports = Conversation;
