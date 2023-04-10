const { DataTypes } = require("sequelize");
const db = require("./Config.js");

const Patient = db.define(
    "patient",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.STRING,

        },
        sec_question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        notifcation: {
            type: DataTypes.STRING,
            
        },
        seennotification: {
            type: DataTypes.STRING,
        },
        token:{
            type: DataTypes.STRING,
        },
        verifyToken:{
            type: DataTypes.STRING,
        }
       
    },
    {
        paranoid: true,
    },
    {
        tableName: "patient"
    }
);

(async () => {
    await db.sync({ force: false });
    console.log('sync here');
});

module.exports = Patient;
