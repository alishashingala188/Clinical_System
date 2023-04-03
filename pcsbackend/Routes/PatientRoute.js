const { loginUser } = require('../Config/auth');
const { verifyUserToken } = require('../Config/auth');
const { getUserToken } = require('../Config/auth');

const patientController =require('../Controller/PatientController');
const prouter = require("express").Router();

//patient Route

prouter.get('/profile', verifyUserToken, (req, res) =>{
  return res.status(200).json({
      status: 200,
      message: "User found!",
      data: {
        user: req.user,
      },
    });
});

prouter.get('/book', verifyUserToken, (req, res) =>{
  return res.status(200).json({
      status: 200,
      message: "User found!",
      data: {
        user: req.user,
      },
    });
});
prouter.get("/appointment",verifyUserToken, patientController.getAppointment)
prouter.get("/viewbill",verifyUserToken, patientController.ViewBill)
prouter.post("/addPatient", patientController.addPatient);
prouter.put("/:id", patientController.updatePatient);
prouter.delete("/:id", patientController.deletePatient);
prouter.get("/:id",patientController.getPatientById);
prouter.get("/", patientController.getAllPatient);
prouter.post("/login", patientController.loginPatient)
prouter.post(
    "/get-all-notification",
    verifyUserToken,
    patientController.getAllNotificationController
  );
module.exports = prouter;