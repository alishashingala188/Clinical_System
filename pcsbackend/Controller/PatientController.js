const { Joi } = require("express-validation");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const Todo = require("../models/todosModel");
const db = require("../models/AdminModule");
const Patients = require("../models/PatientModule.js");
const {getUserToken}=require('../Config/authenicate');
const Appointment=require('../Models/AppointmentModal')
const Users=require('../Models/UserModal');
const Bill =require('../Models/BillModal')
//login 

const loginPatient = async (req, res, next) => {
  try {
    const validateSchema = Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    });

    const validate = validateSchema.validate(req.body);
    if (validate.error) {
      return res.status(412).json({
        status: 412,
        message: validate.error.details[0].message,
      
      });
    }
    const user = await Patients.findOne({ where: { email: req.body.email}  });
    const token=await getUserToken(user)
    user.token=token
    console.log(user.token);
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
       user.password,
			
     );
     if (!isPasswordValid) {
       return res.status(412).json({
         status: 412,
         message: "Invalid password",
       });
     }
    if (user) {
      return res.status(200).json({
        status: 200,
        message: "Login Successful",
        data:{
          user,
          token
        }
        })
    }
  } catch (error) {
    return res.status(412).json({
      status: 412,
      message: "not Login..",
    
    });
  }
};

// register admin 

const addPatient = async (req, res) => {
  try {
    const validateSchema = Joi.object().keys({
      full_name: Joi.string().required(),
      username: Joi.string().required(),
      address: Joi.string().required(),
      contact_no: Joi.string().required(),
      sec_question: Joi.string().required(),
      answer: Joi.string().required(),
      email: Joi.string().email().required(),
      age: Joi.string().required(),
      password: Joi.string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        .required()
        .messages({
          "string.pattern.base":
            "Password must contain 8 characters,one uppercase,one lowercase,one number and one special character",
        }),
    });
    const validate = validateSchema.validate(req.body);
    if (validate.error) {
      return res.status(412).json({
        status: 412,
        message: validate.error.details[0].message,
      });
    }
    const patient = await Patients.findOne({ where: { email: req.body.email } });
    // findOne;
    if (patient) {
      return res.status(412).json({
        status: 412,
        message: "username already in use.",
      });
    }
    bcrypt.hash(req.body.password, 10, async (error, hash) => {
      if (error) {
        return res.status(412).json({
          status: 412,
          message: "Error while hashing password",
        });
      }
      req.body.password = hash;

      // console.log("req :: ", req.body);
      // const user = new User(req.body);
      const data = await Patients.create(req.body);
      return res.status(200).json({
        status: 200,
        message: "patient registered successfully",
        data: data,
      });
    });
  } catch (error) {
    return res.status(412).json({
      status: 412,
      message: error.message,
    });
  }
}

//update admin
async function updatePatient(req, res) {
  let id = req.query.id ? req.query.id : req.params.id;
  console.log("aId", id);
  try {
    const patient = await Patients.findOne({ where: { id: id } });
    if (!patient) {
      return res.status(412).json({
        status: 412,
        message: "User not found",
      });
    }
    const validateSchema = Joi.object().keys({
      full_name: Joi.string().required(),
      address: Joi.string().required(),
      contact_no: Joi.string().length(10).required(),
     
    });
    const validate = validateSchema.validate(req.body);
    if (validate.error) {
      return res.status(412).json({
        status: 412,
        message: validate.error.details[0].message,
      });
    }

    const result = await Patients.update(
      req.body,
      { where: { id: id } },
      // { returning: true }
    );

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
  } catch (error) {
    return res.status(412).json({
      status: 412,
      message: error.message,
    });
  }
}
// delete admin

async function deletePatient(req, res) {
  const id = req.query.id ? req.query.id : req.params.id;
  try {
    const patient = await Patients.findOne({ where: { id: id } });
    if (!patient) {
      return res.status(412).json({
        status: 412,
        message: "User not Found !"
      });
    }
    const result = Patients.destroy({ where: { id: id } });
    return res.status(200).json({
      status: 200,
      message: "Doctor deleted successfully...!!",
      data: {
        result: result
      }
    });
  } catch (error) {
    return res.status(412).json({
      status: 412,
      message: error.message,
    });
  }

}


//4.getUser(singleUser)
async function getPatientById(req, res) {
  try {
    const id = req.params.id;
    const result = await Patients.findOne({
      where: { id },
    });
    return res.status(200).json({
      status: 200,
      message: "User found successfully!",
      data: {
        user: result,
      },
    });
  } catch (error) {
    return res.status(412).json({
      status: 412,
      message: error.message,
    });
  }
}

// 5. dispay all admin list 

const getAllPatient = async (req, res) => {

  let doctor = await Patients.findAll();
  res.status(200).send(doctor)
}

// count all admin

// const dataCount = async (req, res) => {
//   try {
//     const count_data = [];
//     const user_data = await Patient.find().countDocuments();
//     count_data.push({
//       patient: user_data
//     });
//     res.status(200).send({ success: true, msg: "counting data", data:count_data });
//   } catch (error) {
//     res.status(200).send({ success: false, msg:error.message });
//   }
// }

//notification all 

const notification =async(req,res)=>{
  try {
    
  } catch (error) {
    console.log(error); 
  }
}
const getAllNotificationController = async (req, res) => {
  try {
    const user = await Patients.findOne({ _id: req.body.id });
    const seennotification = user.seennotification;
    const notifcation = user.notifcation;
    seennotification.push(...notifcation);
    user.notifcation = [];
    user.seennotification = notifcation;
    const updatedUser = await user.save();
    res.status(200).send({
      success: true,
      message: "all notification marked as read",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in notification",
      success: false,
      error,
    });
  }
};
const getAppointment = async (req, res) => {
  try {
    let doctor = await Appointment.findAll({where:{uid:req.user.id},
      include:[{
        model:Users,
        as:"users",
        attributes:['name','username']
      }]
    });
    if (!doctor) {
      return res.status(400).json({
        message: "error fetching appointment"
      })
    }
    res.status(200).json({
      data: doctor
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}
const ViewBill=async(req,res)=>{
  try{
let patient =await Bill.findAll({where:{uid:req.user.id}
});

if (!patient) {
return res.status(400).json({
  message: "error fetching appointment"
})
}
res.status(200).json({
data: patient
})

} catch (error) {
res.status(400).json({
message: error.message
})
}
}

module.exports = {
  loginPatient,
  addPatient,
  updatePatient,
  deletePatient,
  getPatientById,
  getAllPatient,
  getAllNotificationController,
  getAppointment,
  ViewBill

}


