const Sequelize = require("sequelize");
const db = require("./db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Conversation = require("./Conversation");
const User = db.define("user", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: true },
	},
	email: {
		type: Sequelize.TEXT,
		allowNull: false,
		unique: {
			arg: true,
			msg: "This e-mail has already been registered please try a different email address",
		},
		validate: {
			notEmpty: false,
			isEmail: {
				args: true,
				msg: "this is not a valid email",
			},
		},
	},
});

User.authenticate = async function ({ email, password }) {
	email = email.toLowerCase();
	const user = await User.findOne({ where: { email } });
	if (user) {
		let match = await bcrypt.compare(password, user.password);
		if (match) {
			const token = await jwt.sign({ userId: user.id }, process.env.JWT);
			return token;
		}
	}
	const error = Error("bad credentials");
	error.status = 401;
	throw error;
};

User.findByToken = async function (token) {
	try {
		var decodedToken = jwt.verify(token, process.env.JWT);
		const user = await User.findByPk(decodedToken.userId, {
			attributes: ["id", "firstName", "lastName", "email"],
			include: Conversation,
		});
		if (user) return user;
		const error = Error("expired token");
		error.status = 401;
		throw error;
	} catch (err) {
		const error = Error("bad credentials");
		error.status = 401;
		throw error;
	}
};

const saltRounds = 9;
User.hashPassword = async (user) => {
	const password = await bcrypt.hash(user.password, saltRounds);
	return password;
};
User.beforeCreate(async (user) => {
	user.email = user.email.toLowerCase();
	user.password = await User.hashPassword(user);
	return user;
});
User.beforeValidate((user) => {
	user.email = user.email.toLowerCase();
	return user;
});
module.exports = User;
