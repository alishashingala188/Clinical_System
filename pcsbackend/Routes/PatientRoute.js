const patientController =require('../Controller/PatientController');

const prouter = require("express").Router();
//patient Route
prouter.post("/addPatient", patientController.addPatient);
prouter.put("/:id", patientController.updatePatient);
prouter.delete("/:id", patientController.deletePatient);
prouter.get("/:id", patientController.getPatientById);
prouter.get("/", patientController.getAllPatient);
prouter.post("/login", patientController.loginPatient, (req, res) => {
    return res.status(200).json({
      status: 200,
      message: "Login Successful",
      data:{
        user
      } 
      })
})
//prouter.get("/count",patientController.dataCount);
module.exports = prouter;