const express = require('express');
const session =require('express-session');
const cors = require('cors');
const app = express()
const shortid = require('shortid')
const Razorpay = require('razorpay')
require("dotenv").config();

var corOptions={
    origin:"*"
}

app.use(cors());
const razorpay = new Razorpay({
	key_id: 'rzp_test_QTuO1fvgzMpvEy',
	key_secret: 'GLB8Wrot6zSgreN4ekxUMLnt'
})
app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 590
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})
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


//Router in bill

const brouter = require("./routes/BillRoute");
app.use("/api/bill/", brouter);
//port 

const PORT = process.env.PORT || 5000

// server 

app.listen(PORT,()=>{
    console.log(`server Running on Port ${PORT}`);
});