const patientController =require('../Controller/PatientController');

const prouter = require("express").Router();
//patient Route
prouter.post("/addPatient", patientController.addPatient);
prouter.put("/:id", patientController.updatePatient);
prouter.delete("/:id", patientController.deletePatient);
prouter.get("/:id", patientController.getPatientById);
prouter.get("/", patientController.getAllPatient);

module.exports = prouter;