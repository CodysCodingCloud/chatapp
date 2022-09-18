const Sequelize = require("sequelize");
const db = require("./db");

const UserConversation = db.define("UserConversation", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
});
module.exports = UserConversation;
