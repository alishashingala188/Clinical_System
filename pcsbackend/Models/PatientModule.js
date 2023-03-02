const { DataTypes } = require("sequelize");
const {db} = require("./Config.js");

    const Patient = sequelize.define(
        "patient",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
              },
      full_name:{
          type:DataTypes.STRING,
          allowNull :false
      },
     
      username:{
          type:DataTypes.STRING,
          allowNull :false
      },
      password:{
          type:DataTypes.STRING,
          allowNull :false
      },
      address:{
          type:DataTypes.STRING,
          allowNull :false
      },
      contact_no:{
          type:DataTypes.INTEGER,
          allowNull :false,
      },
      age:{
        type:DataTypes.INTEGER,
        
    },
    sec_question:{
        type:DataTypes.STRING,
        allowNull :false,
    },
    answer:{
        type:DataTypes.STRING,
        allowNull :false,
    },
    
    
    
    },
    {
        tableName:"patient"
    })
   
    (async()=>{
        await db.sync({force:false});
        console.log('sync here');
    })
    module.exports = Patient
  