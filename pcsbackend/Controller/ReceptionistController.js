const { Joi } = require("express-validation");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const Todo = require("../models/todosModel");
const db = require("../models/UserModal.js");
const  Receptionist= require("../models/Receptionist");
const { getUserToken } = require('../Config/rauth.js');
//const CryptoJS = require("crypto-js");

//1 login 

const loginReceptionist = async (req, res, next) => {
  debugger
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
        const user = await Receptionist.findOne({ where: { email: req.body.email } });
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
        next();
      } catch (error) {
        return res.status(412).json({
          status: 412,
          message: "not Login..",
    
        });
};
}
// register admin 

const addReceptionist =async(req,res)=>{
    try {
        const validateSchema = Joi.object().keys({
            name: Joi.string().required(),
            username: Joi.string().required(),
            contact_no: Joi.string().length(10)
            .regex(/^[0-9]+$/).required(),
            email:Joi.string().email().required(),
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
          const admin = await Receptionist.findOne({ where: { email: req.body.email } });
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
            const data = await Receptionist.create(req.body);
            return res.status(200).json({
              status: 200,
              message: "Receptionist registered successfully",
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

      async function updateReceptionist(req, res) {
        let aId = req.query.id ? req.query.id : req.params.id;
        console.log("aId", aId);
        try {
          const admin = await Receptionist.findOne({ where: { id: aId } });
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
      
          const result = await Receptionist.update(
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
  
 
  // 5. dispay all admin list 

  const getAllReceptionist = async(req,res)=>{
    let admin = await Receptionist.findAll();
    res.status(200).send(admin)
    }

      module.exports={
        loginReceptionist,
        addReceptionist,
        updateReceptionist,
        getAllReceptionist     
      }
