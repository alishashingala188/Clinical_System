const adminController = require("../Controller/AdminController");


//admin Route
const arouter = require("express").Router();
arouter.post("/addAdmin", adminController.addAdmin);
arouter.put("/:id", adminController.updateAdmin);
arouter.delete("/:id", adminController.deleteAdmin);
arouter.get("/:id", adminController.getAdminById);
arouter.get("/", adminController.getAllAdmin);
arouter.put("/cpassword/:id", adminController.changePassword);
arouter.get('/alogout', async (req, res) => {
    if (req.session.id) {
        delete req.session.id;
        res.json({ result: 'success' });
    }
    else {
        res.json(
            { result: 'error', message: 'user not logged in ..' }
        );
    }
})
module.exports = arouter;   