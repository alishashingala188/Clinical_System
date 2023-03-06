const adminController = require("../Controller/AdminController");


//admin Route
const arouter = require("express").Router();
arouter.post("/addAdmin", adminController.addAdmin);
arouter.put("/:id", adminController.updateAdmin);
arouter.delete("/:id", adminController.deleteAdmin);
arouter.get("/:id", adminController.getAdminById);
arouter.get("/", adminController.getAllAdmin);

module.exports = arouter;