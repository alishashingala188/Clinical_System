const dbConfig = require('../Config/Connect.js');
const {Sequelize, DataTypes} = require('sequelize');

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
)
db.authenticate()
.then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log('Erroe'+ err);
})



module.exports = db;
