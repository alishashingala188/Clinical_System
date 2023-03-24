const receptionstController =require('../Controller/ReceptionistController');
const rrouter = require("express").Router();
const { loginUser } = require('../Config/rauth');
const { verifyUserToken } = require('../Config/rauth');

//doctor Route

rrouter.get('/profile', verifyUserToken, (req, res) =>{
    return res.status(200).json({
        status: 200,
        message: "User found!",
        data: {
          user: req.user,
        },
      });
});
rrouter.post("/addrece", receptionstController.addReceptionist);
rrouter.put("/:id", receptionstController.updateReceptionist);
rrouter.get("/",receptionstController.getAllReceptionist);
rrouter.post("/rlogin", receptionstController.loginReceptionist)


module.exports = rrouter;