const { DataTypes } = require('sequelize');
const db = require('./Config.js');
const patients = require('../Models/PatientModule')
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
        references: {
            model: patients,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    invoice_no: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item_qty: {
        type: DataTypes.INTEGER,
        
    },
    price: {
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


(async () => {
    await db.sync({ force: false });   // not crete model in second time
    console.log('sync here.....!!!');
})();

module.exports = Bills;