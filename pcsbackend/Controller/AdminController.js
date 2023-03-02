const { Joi } = require("express-validation");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const Todo = require("../models/todosModel");
const db = require("../models/AdminModule");
const Admin = require("../models/AdminModule.js");
// register admin 

const addAdmin =async(req,res)=>{
    try {
        const validateSchema = Joi.object().keys({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            username: Joi.string().required(),
            address: Joi.string().required(),
            contact_no: Joi.string().length(10).required(),
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
          const admin = await Admin.findOne({ where: { username: req.body.username } });
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
              message: "User registered successfully",
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
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
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
      
          const result = await Admin.update(
            req.body,
            { where: { id: aId } },
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
        message: "User deleted successfully!",
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
  
      module.exports={
        addAdmin,
        updateAdmin,
        deleteAdmin,
        getAdminById
      }
      
    
