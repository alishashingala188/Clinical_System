require("dotenv").config();
 const dbConfig = require("../Config/connect");
const { Sequelize, DataTypes } = require("sequelize");
const db = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,{
          host :dbConfig.HOST,
          dialect:dbConfig.dialect,
          operatersAliases:false,
          pool:{
              max :dbConfig.pool.max,
              min:dbConfig.pool.min,
              acquire:dbConfig.pool.acquire,
              idel:dbConfig.pool.idel
          }
  }
);
// const sequelize = new Sequelize(conn.DB,conn.USER,conn.PASSWORD,conn);


db
  .authenticate()
  .then(() => {
    console.log("Connected...");
  })
  .catch((error) => {
    console.log("Error", error);
  });

module.exports =  db;
