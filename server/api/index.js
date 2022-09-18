const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/messages", require("./messages"));

module.exports = router;
