const { DataTypes } = require("sequelize");
const db = require("./Config.js");
const Users= require('../Models/UserModal')
const Patients= require('../Models/PatientModule')

const Appointments = db.define(
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
              model: Patients,
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
    
Users.hasMany(Appointments, {
    foreignKey: "did",
    sourceKey: "id",
    as: "appointments",
  });
  Appointments.belongsTo(Users, {
    foreignKey: "did",
    targetKey: "id",
    as: "users",
  });
 
  Patients.hasMany(Appointments, {
    foreignKey: "uid",
    sourceKey: "id",
    as: "appointments",
  });

  Appointments.belongsTo(Patients, {
    foreignKey: "uid",
    targetKey: "id",
    as: "patients",
  });

  
    (async () => {
        await db.sync({ force: false });
        console.log('sync here');
    });

module.exports = Appointments;
