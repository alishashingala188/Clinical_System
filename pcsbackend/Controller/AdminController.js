const { Joi } = require("express-validation");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const Todo = require("../models/todosModel");
const db = require("../models/UserModal.js");
const Admin = require("../models/UserModal.js");
//const CryptoJS = require("crypto-js");

// 1 login 

// const loginAdmin = async (req, res, next) => {
//   try {
//     const validateSchema = Joi.object().keys({
//       email: Joi.string().required().email(),
//       password: Joi.string().required(),
//     });

//     const validate = validateSchema.validate(req.body);
//     if (validate.error) {
//       return res.status(412).json({
//         status: 412,
//         message: validate.error.details[0].message,
//       });
//     }
//     const admin = await Admin.findOne({ where: { email: req.body.email } });
//     if (!user) {
//       return res.status(404).json({
//         status: 404,
//         message: "User not found",
//       });
//     }

//     const isPasswordValid = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordValid) {
//       return res.status(412).json({
//         status: 412,
//         message: "Invalid password",
//       });
//     }

   
//     next();
//   } catch (error) {
//     return res.status(412).json({
//       status: 412,
//       message: error.message,
    
//     });
//   }
// };

// register admin 

const addAdmin =async(req,res)=>{
    try {
        const validateSchema = Joi.object().keys({
            name: Joi.string().required(),
            username: Joi.string().required(),
            contact_no: Joi.string().length(10)
            .regex(/^[0-9]+$/).required(),
            email:Joi.string().email().required(),
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
              message: validate.error.details[0].message,
            });
          }
          const admin = await Admin.findOne({ where: { email: req.body.email } });
          // findOne;
          if (admin) {
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
            const data = await Admin.create(req.body);
            return res.status(200).json({
              status: 200,
              message: "Admin registered successfully",
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

      async function updateAdmin(req, res) {
        let aId = req.query.id ? req.query.id : req.params.id;
        console.log("aId", aId);
        try {
          const admin = await Admin.findOne({ where: { id: aId } });
          if (!admin) {
            return res.status(412).json({
              status: 412,
              message: "User not found",
            });
          }
          const validateSchema = Joi.object().keys({
            name: Joi.string().required(),
            username: Joi.string().required(),
            contact_no: Joi.string().length(10).required(),
          });
          const validate = validateSchema.validate(req.body);
          if (validate.error) {
            return res.status(412).json({
              status: 412,
              message: validate.error.details[0].message,
            });
          }
      
          const result = await Admin.update(
            req.body,
            { where: { id: aId } },
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
  
  async function deleteAdmin(req, res) {
    let aId = req.query.id ? req.query.id :  req.params.id;
    try {
      const admin = await Admin.findOne({ where: { id: aId } });
      if (!admin) {
        return res.status(412).json({
          status: 412,
          message: "User not found",
        });
      }
  
      await Admin.destroy({ where: { id: aId } });
  
      return res.status(200).json({
        status: 200,
        message: "Admin deleted successfully!",
      });
    } catch (error) {
      return res.status(412).json({
        status: 412,
        message: error.message,
      });
    }
  }

  //4.getUser(singleUser)
async function getAdminById(req, res) {
    try {
      const id = req.params.id;
      const result = await Admin.findOne({
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

const getAllAdmin=async(req,res)=>{
  let admin=await Admin.findAll({
   where:{type:'admin'}
});
res.status(200).send(admin)
}

 // change password 

async function changePassword(req, res) {
  try {
    const validateSchema = Joi.object().keys({
      oldpassword:Joi.string().required(),
      password: Joi.string().required(),
      confirmpassword: Joi.string().required(),
    });
    const validate = validateSchema.validate(req.body);
    if (validate.error) {
      return res.status(412).json({
        status: 412,
        message: validate.error.details[0].message,
      });
    }
    if (req.body.password !== req.body.confirmpassword) {
      return res.status(412).json({
        status: 412,
        message: "Passwords do not match",
      });
    }
    const admin = await Admin.findOne({ where: { id: req.params.id } });
    if (!admin) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(req.body.oldpassword, admin.password);
    if (!isMatch) {
      return res.status(412).json({
        status: 412,
        message: "Old password is not correct",
      });
    }
    const password = await bcrypt.hash(req.body.password,10);
    const result = await Admin.update(
      {
        password,
      },
      { where: { id: req.params.id } }
    );
    if (!result) {
      return res.status(412).json({
        status: 412,
        message: "Unable to update password",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Password changed successfully",
    });
  } catch (error) {
    return res.status(412).json({
      status: 412,
      message: error.message,
    });
  }
}



      module.exports={
        addAdmin,
        updateAdmin,
        deleteAdmin,
        getAdminById,
        getAllAdmin,
        changePassword
      }
      
    
