const Sequelize = require("sequelize");
const dbName = "test";
const db = new Sequelize(
	process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
	{
		logging: false,
	}
);

module.exports = db;
