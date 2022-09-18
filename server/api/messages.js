const router = require("express").Router();
const { Message, User, Conversation } = require("../db");
router.get("/", async function (req, res, next) {
	try {
		let convo = JSON.parse(req.headers.payload);
		let messageData = await Message.findAll({
			where: { conversationId: convo.id },
			include: { model: User },
			order: [["createdAt", "ASC"]],
		});
		res.status(200).send(messageData);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newMessage = await Message.create(req.body);
		res.send(newMessage);
	} catch (error) {
		next(error);
	}
});
router.put("/:id", async (req, res, next) => {
	try {
		const updatedMessage = await Message.findByPk(req.params.id);
		await updatedMessage.update(req.body);
		const newMessageData = await Message.findByPk(req.params.id, {
			include: Student,
		});
		res.send(newMessageData);
	} catch (error) {
		next(error);
	}
});
router.delete("/:id", async (req, res, next) => {
	try {
		const deletedMessage = await Message.findByPk(req.params.id);
		await deletedMessage.destroy();
		res.send(deletedMessage);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
