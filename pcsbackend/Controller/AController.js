const { Joi } = require("express-validation");
const Appointments = require('../Models/AppointmentModal')
const User =require('../Models/UserModal');
const Patient =require('../Models/PatientModule');
const {
  validationResult
} = require('express-validator');

//1.add a Appointments

const addA = async (req, res) => {
  const todo = await Appointments.create({
    did:req.body.did,
    uid:req.body.uid,
    contact_no:req.body.contact_no,
    date:req.body.date,
    time:req.body.time,
    a_reason:req.body.a_reason,
    status:req.body.status  
  });
  res.status(200).send(todo);
  console.log(todo);
};

// get all apoointment
const getA = async (req, res) => {
  const todo = await Appointments.findAll(
   {uid : Patient.full_name},
   {did : User.name});
  res.status(200).send(todo);
};

//update a appointment`1
const updateA = async (req, res) => {
  const todo = await Appointments.update(req.body, {
    where: { id: req.params.id },

  });

  res.status(200).json({
    message: "Todo Updated Successfully!",
  });
};

//delete a appointment
const deleteA = async (req, res) => {
  await Appointments.destroy({ where: { id: req.params.id } });
  res.status(200).json({

    message:"Deleted Successfully"
  });
};


const editStatus = async (req, res) => {
  let Id = req.query.id ? req.query.id : req.params.id;
 // console.log("aId", Id);
  //console.log("status", status);
    const result = await Appointments.update(
 { status:req.body.status},
      {where: { id: Id } });

    if (result[0] === 0) {
      return res.status(412).json({
        status: 412,
        message: "User not updated",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "User updated",
    });

};
module.exports = {
  addA,
  getA,
  updateA,
  deleteA,
  editStatus
};
