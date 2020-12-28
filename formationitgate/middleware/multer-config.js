 const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './images');
  },
  filename: (req, file, callback) => {
      console.log('file',file.originalname);
    const name = file.originalname;
    
    callback(null, name );
  }
});
const fileFilter = (req,file,callback)=>{
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' ){
        console.log('typeOfTheImae',file.mimetype)
        callback(null,true)
    }else{
        callback(null,false,file.mimetype)
    }
}
const upload =multer({storage: storage,fileFilter:fileFilter})
module.exports = upload;
 
/* 
const multer = require('multer')
const storage = multer.diskStorage({  //where to store the file

    destination: (req, file, cb) => {

        cb(null, './images');

    },

    filename: (req, file, cb) => {   //filename specifiyed in the form

       
        cb(null,(file.originalname)); //orinalname:name of the file on the user computer

    }

});

const fileFilter = (req, file, cb) => {  //function to control which files are accepted

    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {  //mimetype of the file

        cb(null, true);

    } else {

        cb(null, false);

    } 

}

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports=upload

 */