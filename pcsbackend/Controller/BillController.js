const { Joi } = require("express-validation");
const Bill = require('../Models/BillModal')
const Patient =require('../Models/PatientModule');
//1.add a Appointments

const addBill = async (req, res) => {
  const todo = await Bill.create({
    uid:req.body.uid,
    did:req.body.did,
    date:req.body.date,
    room_cost:req.body.room_cost,
    email:req.body.email,
    invoice_no:req.body.invoice_no, 
    medician_cost:req.body.medician_cost, 
    doctor_charge:req.body.doctor_charge ,
    extra_charge:req.body.extra_charge ,
    discount:req.body.discount ,
    totle:req.body.totle  
  });
  res.status(200).send(todo);
  console.log(todo);
};

// get all apoointment
const getBill = async (req, res) => {
  const todo = await Bill.findAll()
  res.status(200).send(todo);
};

//update a appointment`1
const updateBill = async (req, res) => {
  const todo = await Bill.update(req.body, {
    where: { id: req.params.id },

  });

  res.status(200).json({
    message: "Todo Updated Successfully!",
  });
};

//delete a appointment
const deleteBill = async (req, res) => {
  await Bill.destroy({ where: { id: req.params.id } });
  res.status(200).json({

    message:"Deleted Successfully"
  });
};


module.exports = {
  addBill,
  getBill,
  updateBill,
  deleteBill,

};
