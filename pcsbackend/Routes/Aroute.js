const uController = require("../controller/AController");
const router = require("express").Router();

router.post("/addTodo", uController.addTodo);
// router.get("/getAllTodos", todoController.getAllTodos);

router.get("/:id", uController.getATodo);
router.put("/:id", uController.updateTodo);
router.delete("/:id", uController.deleteTodo);

module.exports = router;
