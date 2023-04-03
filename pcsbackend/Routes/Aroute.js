const aController = require("../controller/AController");
const router = require("express").Router();
const { verifyUserToken } = require('../Config/authenicate');
router.post("/addTodo", aController.addA);
// router.get("/getAllTodos", todoController.getAllTodos);

router.get("/", aController.getA);
router.get("/:id", aController.getAppointmentById);
router.put("/:id", aController.updateA);
router.put('/edit/:id',aController.editStatus);
router.delete("/:id", aController.deleteA);
module.exports = router;
