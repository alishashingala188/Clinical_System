const { Joi } = require("express-validation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models/AdminModule");
const Patients = require("../models/PatientModule.js");
const { getUserToken, verifyUserToken } = require('../Config/authenicate');
const Appointment = require('../Models/AppointmentModal');
const Users = require('../Models/UserModal.js');
const Bill = require('../Models/BillModal')
const nodemailer = require("nodemailer");
const keysecret = process.env.USER_SECRET_KEY

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
    const user = await Patients.findOne({ where: { email: req.body.email } });
    const token = await getUserToken(user)
    user.token = token
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
        data: {
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



const getAppointment = async (req, res) => {
  try {
    let doctor = await Appointment.findAll({
      where: { uid: req.user.id },
      include: [{
        model: Users,
        as: "users",
        attributes: ['name', 'username']
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
const ViewBill = async (req, res) => {
  try {
    let patient = await Bill.findAll({ where: { uid: req.user.id },});

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

//send email Link For reset Password
const sendPasswordLink = async (req, res, user) => {

 
  // Create a SMTP transporter object
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'demopractice6720@gmail.com', 
      pass: 'hfklaednxeuhjtnm'
    }
  });
  try {
    console.log(req.body)
    const { email } = req.body;

  if(!email){
      res.status(401).json({status:401,message:"Enter Your Email"})
  };
  const userfind = await Patients.findOne({where:{email:email}});
    
    const token = await jwt.sign(
      {
        id:userfind.id,
        email: userfind.email,
      },
      process.env.USER_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
   console.log(token)


    const mailOptions = {
      from: 'demopractice6720@gmail.com',
      to: req.body.email,
      subject: "Sending Email For password Reset",
      text: `This Link Valid For 2 MINUTES http://localhost:3000/forgotpassword/${userfind.id}/${token}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        // res.status(401).json({ status: 401, message: "email not send" })
      } else {
        console.log("Email sent");
      }
    })
  } catch (error) {
    res.status(401).json({ status: 401, message: "invalid user" })
  }
}


const forgotpassword =async(req,res)=>{
const {id,token} = req.params;
try {
    const validuser = await Patients.findOne({_id:id,verifyToken:token});
    console.log(validuser);
    const verifyToken = jwt.verify(token,keysecret);

    console.log("hello",verifyToken)
    if(validuser && verifyToken.id){
        res.status(201).json({status:201,validuser})
    }else{
        res.status(401).json({status:401,message:"user not exist"})
    }
} catch (error) {
    res.status(401).json({status:401,error})
}
};

const FchangePassword=async(req,res)=>{
const {id,token} = req.params;

const { password } = req.body;

try {
    const validuser = await Patients.findOne({id:id,verifytoken:token});
    
    const verifyToken = jwt.verify(token,keysecret);

    if(validuser && verifyToken.id){
        const newpassword = await bcrypt.hash(password,10);

        const setnewuserpass = await Patients.update({password:newpassword},
         { where :{id:id}})
      
        //setnewuserpass.save()
        res.status(201).json({status:201,setnewuserpass})
    }else{
        res.status(401).json({status:401,message:"user not exist"})
    }
} catch (error) {
    res.status(401).json({status:401,
      message:error.message})
}
}

module.exports = {
  loginPatient,
  addPatient,
  updatePatient,
  deletePatient,
  getPatientById,
  getAllPatient,
  getAppointment,
  ViewBill,
  sendPasswordLink,
  forgotpassword,
  FchangePassword


}


