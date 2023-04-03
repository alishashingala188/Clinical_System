const { DataTypes } = require('sequelize');
const db = require('./Config.js');

const Users = db.define(
    "user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
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
        allowNull: true
    },
    contact_no: {
        type: DataTypes.STRING,
        allowNull: false,
        limit: 9
    },
    email: {
        type: DataTypes.STRING,
        limit: [25, "email cannot be greater than 25 characters"],
        allowNull: false,
        unique: true
    },
    speciality: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    clinic_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    education: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: true
    },
    available_day: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    isActive:{
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        paranoid: true,
    },
    {
        tableName: "users",
    }
    );

(async () => {
    await db.sync({ force: false });   // not crete model in second time
    console.log('sync here.....!!!');
})();

module.exports = Users;