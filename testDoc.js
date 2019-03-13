var express = require('express');
var router = express.Router();
var multer = require('multer');
const md5File = require('md5-file/promise')
const md5=require('md5')
 const request=require('request');
const fs=require('fs');
var DIR = './uploads/';

var N_DIR

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
label1:

    var dir= DIR +file.originalname


    fs.access(dir, function(err) {
      if (err && err.code === 'ENOENT') {
        
        console.log("New Folder");
        let name= file.originalname;
          N_DIR = DIR+name;
          if (!fs.existsSync(N_DIR)){
            fs.mkdirSync(N_DIR);
        }
        
          cb(null, N_DIR);
        
          console.log("File saved successfully");

      }else{


        console.log("file.path",file);
        console.log("^^^^^^^^^^^^^^^^^^^^^");
        var incomingfileHash;
        
        incomingfileHash=  md5(file);
        console.log(incomingfileHash);
        
        
         
        fs.readdir(dir, (err, files) => {
        
        console.log(files);
        
        for(let i=0;i<files.length;i++){
        
        
         let file= files[i]
        EachFilePath=dir +'/' +file;
        
        var eachFileHash;
        
        
        md5File(EachFilePath).then(hash => {
                
          eachFileHash=hash;
        console.log("=============================---===================================");
        console.log( eachFileHash);
        
        console.log("incomingfilehash",incomingfileHash);
        console.log("eachFileHash",eachFileHash);
        
        
        if(incomingfileHash.localeCompare(eachFileHash)){
          console.log("Hash match........file already exist ");
          //throw new Error("Something went badly wrong!");
        
         cb(err, null);
         
        
        }else{
        
        
          let name= file.originalname;
          N_DIR = DIR+name;
          if (!fs.existsSync(N_DIR)){
            fs.mkdirSync(N_DIR);
        }
        
          cb(null,N_DIR);
        
          console.log("File saved successfully");
        }
        })
        }
        });
      }
    });
  },
  filename: (req, file, cb) => {

    let name= file.originalname;
   
    let ext =name.lastIndexOf('.');
  // console.log(ext);
    let a= name.slice(ext)
    console.log("after slice ",a);


    cb(null, new Date().toLocaleString()+ a);
  }
},(req, file, cb)=>{

 console.log(file); 

});

var  upload = multer({storage: storage},(err)=>{


  
console.log("File already exiist !");

});

router.get('/', function(req, res, next) {

  res.send('hello !')
});

function   invoke(eq,res ,name,date,hash ,mimeType,location ){

console.log(req.headers.authorization)

    request({
        headers: {
            'content-type': 'application/json',
            'authorization' :req.headers.authorization
        },
        uri: 'http://localhost:4000/channels/mychannel/chaincodes/mycc',
        body: {
              "peers": ["peer0.org1.example.com","peer0.org2.example.com"],
              "fcn":'save',
              "args":[name,date,'Babita Bisht',hash ,mimeType,location]
            },
            json: true,
        method: 'POST'
      }, function (err, response, body) {
      
      console.log(body);
      
      let a= JSON.stringify(body.message );
      console.log(a);
      res.send('done !')
      
      });
}

router.post('/upload', upload.single('photo'),function (err, req, res) {
  
//   if(err){

//     console.log("error...........................");

// return   res.send({
//       success:false
//     })
//   }


     var path = '';
     if (!req.file) {
      console.log("No file received");
      
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      console.log("===================================");
      
      let path=req.file.path;
      console.log(path);
      var Hash;
      md5File(path).then(hash => {
            Hash=hash;

        console.log(`The MD5 sum of LICENSE.md is: ${hash}`)

       // filename, timestamp, author, hash, mimetype, path


        let name=req.file.originalname.toString();
      let location=req.file.path.toString();
      let size=req.file.size.toString()
      let mimeType=req.file.mimetype.toString();
      let hashh=Hash.toString();
      let date=Date.now().toString();

    //  invoke(req,res ,name,location,size,mimeType,hashh ,date);

      invoke(req,res ,name,date,author,hashh ,mimeType,location);

      })

      
      }
 
})
router.get('/hashFile',(req,res)=>{

  md5File(DIR + 's1.png').then(hash => {
    console.log(`The MD5 sum of LICENSE.md is: ${hash}`)

    res.send(hash)

  })

})


module.exports = router;
