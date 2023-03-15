
const Appointment = require('../Models/AppointmentModal')
const User =require('../Models/UserModal');
const Patient =require('../Models/PatientModule');
const {
  validationResult
} = require('express-validator');

//1.add a todo
const addTodo = async (req, res) => {
  let info = req.body;
  const todo = await Appointment.create(info);
  res.status(200).send(todo);
  console.log(todo);
};


const getATodo = async (req, res) => {
  const todo = await Appointment.findOne({ where: { id: req.params.id } });
  res.status(200).send(todo);
};

const updateTodo = async (req, res) => {
  const todo = await Appointment.update(req.body, {
    where: { id: req.params.id },
  });

  res.status(200).json({
    message: "Todo Updated Successfully!",
  });
};

const deleteTodo = async (req, res) => {
  await Appointment.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    message:"Deleted Successfully"
  });
};
module.exports = {
  addTodo,
  // getAllTodos,
  getATodo,
  updateTodo,
  deleteTodo,
};
