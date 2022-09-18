const Sequelize = require("sequelize");
const User = require("./User");
const Message = require("./Message");
const Conversation = require("./Conversation");
const UserConversation = require("./UserConversation");
const { userSeed, conversationSeed, messageSeed, ucSeed } = require("./seed");

Conversation.belongsToMany(User, { through: "UserConversation" });
User.belongsToMany(Conversation, { through: "UserConversation" });
// UserConversation.belongsTo(User);
// UserConversation.belongsTo(Conversation);
// User.hasMany(UserConversation);
// Conversation.hasMany(UserConversation);

Message.belongsTo(Conversation);
Conversation.hasMany(Message);

Message.belongsTo(User);
User.hasMany(Message);

const db = require("./db");
const syncAndSeed = async () => {
	try {
		await db.sync({ force: true });
		await Promise.all(
			userSeed.map((user) => {
				return User.create(user);
			})
		);
		await Promise.all(
			conversationSeed.map((convo) => {
				return Conversation.create(convo);
			})
		);
		await Promise.all(
			ucSeed.map((conn) => {
				return UserConversation.create(conn);
			})
		);
		ucSeed;
		await Promise.all(
			messageSeed.map((message) => {
				return Message.create(message);
			})
		);
		console.log(`Seeding successful!`);
	} catch (error) {
		console.log(error);
	}
};
module.exports = { db, User, Message, Conversation, syncAndSeed };
