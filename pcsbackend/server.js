const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

var corOptions={
    origin:"*"
}

// Middleware

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Router in admin

const arouter = require("./routes/AdminRoute");
app.use("/api/admin", arouter);

//Router in doctor

const drouter = require("./routes/DoctorRoute");
app.use("/api/doctor", drouter);

//Router in Patient

const prouter = require("./routes/PatientRoute");
app.use("/api/user", prouter);

// const router =require('./routes/ProductRoute.js');
// app.use('/api/products',router)

//Test  api

app.get('/',(req,res)=>{
    res.json({message :'hello nikita'})
})

//port 

const PORT = process.env.PORT || 5000

// server 

app.listen(PORT,()=>{
    console.log(`server Running on Port ${PORT}`);
});