const aController = require("../controller/AController");
const router = require("express").Router();

router.post("/addTodo", aController.addA);
// router.get("/getAllTodos", todoController.getAllTodos);

router.get("/", aController.getA);
router.put("/:id", aController.updateA);
router.put('/edit/:id',aController.editStatus);
router.delete("/:id", aController.deleteA);
module.exports = router;
