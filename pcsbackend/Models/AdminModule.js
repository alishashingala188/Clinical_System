const { DataTypes } = require("sequelize");
const db = require("./Config.js");

  const Admin = db.define(
    "admin",
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    first_name:{
        type:DataTypes.STRING,
        allowNull :false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull :false
    },
    username:{
        type:DataTypes.STRING,
        allowNull :false
    },
    password:{
        type:DataTypes.STRING,
        allowNull :false,
        limit: [16, "password cannot be greater than 16 characters"],
    },
    address:{
        type:DataTypes.TEXT,
        allowNull :false
    },
    contact_no:{
        type:DataTypes.INTEGER,
        allowNull :false,
        limit: 9
    } 
},
    {
    tableName: "admin",
    }
);
  
(async () => {
    await db.sync({ force: false });
    console.log('sync here');
    // Code here
  })();
  
  module.exports = Admin;