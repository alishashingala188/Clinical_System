const multer =require('multer');
const storage=multer.memoryStorage();

const imageFilter =(req,file,cbf)=>{
    if(file.mimetype.startsWith("image")){
        cbf(null,true);
    }else{
        cbf("Please upload only image.",false)
    }
};
var uploadFile=multer({storage:storage,fileFilter:imageFilter});

module.exports = uploadFile