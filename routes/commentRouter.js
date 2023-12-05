var express = require('express');
var router = express.Router();
const commentController = require("../controllers/commentController")
router.get("/", commentController.get);
router.post("/", commentController.post);
router.delete("/:id", commentController.delete);
router.get(`/:id`, commentController.getIndividual);
router.put(`/:id`, commentController.updateText);

module.exports = router;
