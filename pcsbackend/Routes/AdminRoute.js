const adminController = require("../Controller/AdminController");
const router = require("express").Router();
router.post("/addAdmin", adminController.addAdmin);
router.put("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);
router.get("/:id", adminController.getAdminById);



module.exports = router;