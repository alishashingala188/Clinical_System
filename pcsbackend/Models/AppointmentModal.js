const { DataTypes } = require("sequelize");
const db = require("./Config.js");
const Users= require('../Models/UserModal')
const Patient= require('../Models/PatientModule')

const Appointment = db.define(
    "appointment",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        did: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: Users,
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: Patient,
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        contact_no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date:{
            type:DataTypes.DATE
        },
        time:{
            type:DataTypes.TIME
        },
        status:{
            type:DataTypes.STRING
        }, 
          a_reason:{
            type:DataTypes.STRING
        }
    },
    {
        paranoid:true,
    },
    {
        tableName: "appointment"
    }
    );
    
Users.hasMany(Appointment, {
    foreignKey: "did",
    sourceKey: "id",
    as: "appointment",
  });
  Appointment.belongsTo(Users, {
    foreignKey: "did",
    targetKey: "id",
    as: "users",
  });
 
  Patient.hasMany(Appointment, {
    foreignKey: "uid",
    sourceKey: "id",
    as: "appointment",
  });

  Appointment.belongsTo(Patient, {
    foreignKey: "uid",
    targetKey: "id",
    as: "patient",
  });

  
    (async () => {
        await db.sync({ force: false });
        console.log('sync here');
    });

module.exports = Appointment;
