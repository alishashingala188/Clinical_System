const doctorController =require('../Controller/UserController');
const drouter = require("express").Router();
const { loginUser } = require('../Config/authenicate');
const { verifyUserToken } = require('../Config/authenicate');
//const upload =require('../middleware/upload')
//doctor Route
drouter.post("/addDoctor",doctorController.upload,doctorController.addDoctor);
drouter.get('/profile', verifyUserToken, (req, res) =>{
    return res.status(200).json({
        status: 200,
        message: "User found!",
        data: {
          user: req.user,
        },
      });
});
drouter.get("/appointment",verifyUserToken, doctorController.getAppointment)
drouter.get("/patient",verifyUserToken, doctorController.getPatient);
drouter.put("/:id", doctorController.updateDoctor);
drouter.delete("/:id",doctorController.deleteDoctor);
drouter.get("/:id",doctorController.getDoctorById);
drouter.get("/",doctorController.getAllDoctor);
drouter.post("/dlogin", doctorController.loginDoctor)


module.exports = drouter;