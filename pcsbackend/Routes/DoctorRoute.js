const doctorController =require('../Controller/UserController');
const drouter = require("express").Router();

//doctor Route

drouter.post("/addDoctor", doctorController.addDoctor);
drouter.put("/:id", doctorController.updateDoctor);
drouter.delete("/:id", doctorController.deleteDoctor);
drouter.get("/:id",doctorController.getDoctorById);
drouter.get("/", doctorController.getAllDoctor);
drouter.post("/dlogin", doctorController.loginDoctor, (req, res) => {
    return res.status(200).json({
      status: 200,
      message: "Login Successful",
      data:{
        user
      } 
      })
})
module.exports = drouter;