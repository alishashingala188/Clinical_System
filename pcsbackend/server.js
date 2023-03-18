const express = require('express');
const session =require('express-session');
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


//Router in Appointment

const router = require("./routes/aroute");
app.use("/api/", router);



//Router in receptionist

const rrouter = require("./routes/ReceptionistRoute");
app.use("/api/rece/", rrouter);

// app.use(
//     session({
//         name:'session_id',
//         secret:'my_secret',
//         cookie:{
//             maxAge:30*864000000,
//         }
//     })
// );
//Test  api

// app.get('/',(req,res)=>{
//     res.json({message :'hello nikita'})
// })

//port 

const PORT = process.env.PORT || 5000

// server 

app.listen(PORT,()=>{
    console.log(`server Running on Port ${PORT}`);
});