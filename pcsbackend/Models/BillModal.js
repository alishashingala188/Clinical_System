const { DataTypes } = require('sequelize');
const db = require('./Config.js');
const patients = require('../Models/PatientModule')
const users = require('../Models/UserModal')

const Bills = db.define(
    "bill", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
        references: {
            model: patients,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    did: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
        references: {
            model: users,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    email: {
        type: DataTypes.STRING,
        limit: [25, "email cannot be greater than 25 characters"],
        allowNull: false,
        unique: true
    },
    invoice_no: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    room_cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    medician_cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    doctor_charge: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    extra_charge: {
        type: DataTypes.INTEGER,

    },
    discount: {
        type: DataTypes.INTEGER

    },
    totle: {
        type: DataTypes.INTEGER

    },
    date: {
        type: DataTypes.DATE

    }
},
    {
        paranoid: true,
    },
    {
        tableName: "bills",
    });

patients.hasMany(Bills, {
    foreignKey: "uid",
    sourceKey: "id",
    as: "bills",
});

Bills.belongsTo(patients, {
    foreignKey: "uid",
    targetKey: "id",
    as: "patients",
});

users.hasMany(Bills, {
    foreignKey: "did",
    sourceKey: "id",
    as: "bills",
});

Bills.belongsTo(users, {
    foreignKey: "did",
    targetKey: "id",
    as: "users",
});


(async () => {
    await db.sync({ force: false });   // not crete model in second time
    console.log('sync here.....!!!');
})();

module.exports = Bills;