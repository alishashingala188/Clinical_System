const adminController = require("../Controller/AdminController");
const { verifyUserToken } = require('../Config/authenicate');


//admin Route
const arouter = require("express").Router();

arouter.get('/profile', verifyUserToken, (req, res) =>{
    return res.status(200).json({
        status: 200,
        message: "User found!",
        data: {
          user: req.user,
        },
      });
});
arouter.post("/addAdmin", adminController.addAdmin);
arouter.put("/:id",adminController.updateAdmin);
arouter.delete("/:id", adminController.deleteAdmin);
arouter.get("/:id", adminController.getAdminById);
arouter.get("/", adminController.getAllAdmin);
arouter.put("/cpassword/:id",adminController.changePassword);
module.exports = arouter;   