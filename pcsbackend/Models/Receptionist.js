 const { DataTypes } = require("sequelize"); const db = require("./Config.js");

// model in Admin 
  const Receptionist = db.define(
    "receptionist",
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    name:{
        type:DataTypes.STRING,
        allowNull :false
    },
    username:{
        type:DataTypes.STRING,
        allowNull :false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
    password:{
        type:DataTypes.STRING,
        allowNull :false,
        limit: [16, "password cannot be greater than 16 characters"],
    },
  
    contact_no:{
        type:DataTypes.STRING,
        allowNull :false,
        limit: 9
    },
},
    {
      tableName: "Receptionist",
    }
);
       
(async() => {    
    await db.sync({ force: false });   // not crete model in second time
    console.log('sync here.....!!!');
  })();
  
  module.exports = Receptionist;