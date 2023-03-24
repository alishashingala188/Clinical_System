const BillController = require("../controller/BillController");
const brouter = require("express").Router();

brouter.post("/addbill", BillController.addBill);
brouter.get("/", BillController.getBill);
brouter.put("/:id", BillController.updateBill);
brouter.delete("/:id", BillController.deleteBill);

module.exports = brouter;
