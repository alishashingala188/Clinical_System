const { Joi } = require("express-validation");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const Todo = require("../models/todosModel");
const db = require("../models/AdminModule");
const Patient = require("../models/PatientModule.js");
// register admin 

const addPatient =async(req,res)=>{
    try {
        const validateSchema = Joi.object().keys({
            full_name: Joi.string().required(),
            username: Joi.string().required(),
            address: Joi.string().required(),
            contact_no: Joi.string().required(),
            sec_question: Joi.string().required(),
            answer: Joi.string().required(),
            email:Joi.string().email().required(),
            age:Joi.string().required(),
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
          const patient = await Patient.findOne({ where: { email: req.body.email } });
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
            const data = await Patient.create(req.body);
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
          const patient = await Patient.findOne({ where: { id: id } });
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
            sec_question:Joi.string().required()
          });
          const validate = validateSchema.validate(req.body);
          if (validate.error) {
            return res.status(412).json({
              status: 412,
              message: validate.error.details[0].message,
            });
          }
      
          const result = await Patient.update(
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
  try{
     const patient=await Patient.findOne({where:{ id : id }});
     if(!patient){
       return res.status(412).json({
        status:412,
        message:"User not Found !"
      });
     }
     const result = Patient.destroy({where : { id : id }});
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
  

  //4.getUser(singleUser)
async function getPatientById(req, res) {
    try {
      const id = req.params.id;
      const result = await Patient.findOne({
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

const getAllPatient=async(req,res)=>{

  let doctor = await Patient.findAll(
    
  );
  res.status(200).send(doctor)
  // try {
  // let size = parseInt(req.params.size) || 10,
  //     pageNo = parseInt(req.params.pageNo) || 1,
  //     sortBy = req.params.sortBy || "createdAt",
  //     sort = req.query.sort || "desc",
  //     where = {};

  //   if (sort != "desc") {
  //     sort = "asc";
  //   }

  //   let condition = {
  //     where: where,
  //     offset: (pageNo - 1) * size,
  //     limit: size,
  //     order: [[sortBy, sort]],
  //   };

  //   const users = await Patient.findAndCountAll(condition);

  //   if (users.length === 0) {
  //     return res.status(200).json({
  //       status: 200,
  //       data: {
  //         count: 0,
  //         totalPage: 0 + 1,
  //         currentPage: pageNo,
  //         users: [],
  //       },
  //     });
  //   } else {
  //     return res.status(200).json({
  //       status: 200,
  //       data: {
  //         count: users.count,
  //         totalPage: Math.ceil(users.count / size),
  //         currentPage: pageNo,
  //         users: users.rows,
  //       },
  //     });
  //   }
  // } catch (error) {
  //   return res.status(400).json({
  //     status: 412,
  //     message: error.message,
  //   });
  // }
}
  
      module.exports={
        addPatient,
        updatePatient,
        deletePatient,
        getPatientById,
        getAllPatient
      }
      
    
