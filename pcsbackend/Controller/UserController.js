const { Joi } = require('express-validation');
const bcrypt = require('bcrypt');
const Doctor = require('../Models/UserModal.js')


//Login in doctor

const loginDoctor = async (req, res, next) => {

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
    const user = await Doctor.findOne({ where: { email: req.body.email}  });
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
          user
        }
        })
    }
    next();
  } catch (error) {
    return res.status(412).json({
      status: 412,
      message: "not Login..",
    
    });
  }
};


//1 add a doctor 

const addDoctor = async (req, res) => {
  try {
    const validateSchema = Joi.object().keys({
      name: Joi.string().required(),
      username: Joi.string().required(),
      address: Joi.string().required(),
      contact_no: Joi.string().required(),
      speciality: Joi.string().required(),
      email: Joi.string().email().required(),
      clinic_name:Joi.string().required(),
      gender: Joi.string().required(),
      education: Joi.string().required(),
      type: Joi.string().required(),
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
        message: validate.error.details[0].message
      })
    }
    const doctor = await Doctor.findOne({ where: { email: req.body.email } });
    if (doctor) {
      return res.status(412).json({
        status: 412,
        message: 'email Id alredy in use..'
      });
    }
    bcrypt.hash(req.body.password, 10, async (error, hash) => {
      if (error) {
        return res.status(412).json({
          status: 412,
          message: "Error while hashing password"
        })
      }
      req.body.password = hash;
      const data = await Doctor.create(req.body);
      return res.status(200).json({
        status: 200,
        message: "Doctor registered successfully",
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
// 2 update doctor

const updateDoctor = async (req, res) => {
  const id = req.query.id ? req.query.id : req.params.id;
  try {
    const doctor = await Doctor.findOne({ where: { id: id } });
    if (!doctor) {
      res.status(412).json({
        status: 412,
        message: "doctor not found !!"
      })
    }
    const validateSchema = Joi.object().keys({
      name: Joi.string().required(),
      username: Joi.string().required(),
      address: Joi.string().required(),
      clinic_name:Joi.string().required(),
     
    });

    const validate = validateSchema.validate(req.body);
    if (validate.error) {
      return res.status(412).json({
        status: 412,
        message: validate.error.details[0].message,
      })
    };
    const result = Doctor.update(
      req.body,
      { where: { id: id } }
    );
   
    if (result[0] === 0) {
      return res.status(412).json({
        status: 412,
        message: "User not updated",
       
      });
    }
   
    return res.status(200).json({
      status: 200,
      message: "Doctor updated",  
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


// 3 delete Doctor 

const deleteDoctor = async(req,res)=>{
  const id = req.query.id ? req.query.id : req.params.id;
  try{
     const doctor=await Doctor.findOne({where:{ id : id }});
     if(!doctor){
       return res.status(412).json({
        status:412,
        message:"User not Found !"
      });
     }
     const result = Doctor.destroy({where : { id : id }});
     return res.status(200).json({
          status:200,
          message:"Doctor deleted successfully...!!",
          data:{
            result:result
          }
        }); 
  }catch(error)
    {
    return res.status(412).json({
      status: 412,
      message: error.message,
    });
  }
}

// 5  get single Doctor by id

async function getDoctorById(req, res) {
  try {
    const id = req.params.id;
    const result = await Doctor.findOne({
      where: { id:id },
     
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

// 5. dispay all doctor list 

const getAllDoctor = async(req,res)=>{
let doctor = await Doctor.findAll(
  { where: { type: 'doctor' } },
);
res.status(200).send(doctor)
}

module.exports = {
   loginDoctor,
  addDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctorById,
  getAllDoctor

}