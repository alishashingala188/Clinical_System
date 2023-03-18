const { loginUser } = require('../Config/authenicate');
const { verifyUserToken } = require('../Config/authenicate');

const patientController =require('../Controller/PatientController');


const prouter = require("express").Router();
//patient Route
prouter.post("/addPatient", patientController.addPatient);
prouter.put("/:id", patientController.updatePatient);
prouter.delete("/:id", patientController.deletePatient);
prouter.get("/:id", patientController.getPatientById);
prouter.get("/", patientController.getAllPatient);
prouter.post("/login", patientController.loginPatient)
prouter.post(
    "/get-all-notification",
    verifyUserToken,
    patientController.getAllNotificationController
  );
module.exports = prouter;