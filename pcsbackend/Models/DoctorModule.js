const { DataTypes } = require("sequelize");
const { db } = require("./Config.js");

const Doctor = db.define(
    "doctor",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        dname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            limit: [16, "password cannot be greater than 16 characters"],
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        contact_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
            limit: 9
        },
        speciality: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            limit: [25, "email cannot be greater than 25 characters"],
        },
        gender: {
            type: DataTypes.CHAR
        },
    },
    {
        tableName: "doctor"
    }
)
    (async () => {
        await db.sync({ force: false });
        console.log('sync here');
    })();

module.exports = Doctor;


