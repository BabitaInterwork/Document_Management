var express = require('express');
var router = express.Router();
var multer = require('multer');
const md5File = require('md5-file/promise')
const md5=require('md5')
 const request=require('request');
const fs=require('fs');
var DIR = './uploads/';
var  path =require('path')

var N_DIR

const notifier = require('node-notifier');
// String
notifier.notify('Message');
 
// Object



let storage = multer.diskStorage({
  destination: (req, file, cb) => {
console.log(file);
    let name= file.originalname;
    N_DIR = DIR+name;
    if (!fs.existsSync(N_DIR)){
      fs.mkdirSync(N_DIR);
  }
    cb(null,N_DIR);
  },
  filename: (req, file, cb) => {
var count  
console.log("file........",file);
var dir= DIR + file.originalname;

fs.readdir(dir, (err, files) => {
  console.log(files.length);
  count=files.length

  console.log(count);
    let name= file.originalname;
   
    let ext =name.lastIndexOf('.');
  // console.log(ext);
    let a= name.slice(ext)
    console.log("after slice ",a);

let countt=count+1
    cb(null, new Date().toLocaleString()+'_Ver'+countt+ a);
});
  }
});
var  upload = multer({storage: storage});
router.get('/', function(req, res, next) {
  res.send('hello !')
});

function   invoke(req,res ,name,date,author,hash ,mimeType,location ,fileoriginalname ,version){

console.log(req.headers.authorization)

    request({
        headers: {
            'content-type': 'application/json',
            'authorization' :req.headers.authorization
        },
        uri: 'http://localhost:4000/channels/mychannel/chaincodes/mycc',
        body: {
              "peers": ["peer0.org1.example.com","peer0.org2.example.com"],
              "fcn":'upload',
              "args":[name,date,author,hash ,mimeType,location,fileoriginalname ,version]
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

router.post('/upload', upload.single('photo'),function (req, res, next) {
 {
   console.log(req.file);
      console.log('file received');
     
      let path=req.file.path;
      console.log(path);

      let ext =path.lastIndexOf('/');
      // console.log(ext);
        let actualFileName= path.slice(ext)
        console.log("after slice of file name ",actualFileName);
        console.log("===================================");
      
        let i1 = actualFileName.lastIndexOf('_')
        
        let i2= actualFileName.lastIndexOf('.');
        
        let version=actualFileName.substring(i1,i2);
console.log(`file version ${version}`);

      var Hash;
      md5File(path).then(hash => {
            Hash=hash;

        console.log(`The MD5 sum of LICENSE.md is: ${hash}`)

       // filename, timestamp, author, hash, mimetype, path


        let name=actualFileName.toString();
      let location=req.file.path.toString();
      let size=req.file.size.toString()
      let mimeType=req.file.mimetype.toString();
      let hashh=Hash.toString();
      let date=Date.now().toString();
      let fileoriginalname=req.file.originalname.toString();
       let author="jim"
       

    //  invoke(req,res ,name,location,size,mimeType,hashh ,date);

      invoke(req,res ,name,date,author,hashh ,mimeType,location,fileoriginalname,version);

      })

      
      }
 
})
router.get('/hashFile',(req,res)=>{

  md5File(DIR + 's1.png').then(hash => {
    console.log(`The MD5 sum of LICENSE.md is: ${hash}`)

    res.send(hash)

  })

})

router.get('/getDocs',(req,res)=>{

  console.log("inside getDocs ...............!");
invokeForDocs(req,res)


})


function   invokeForDocs(req,res ){

  console.log(req.headers.authorization)
  
      request({
          headers: {
              'content-type': 'application/json',
              'authorization' :req.headers.authorization
          },
          uri: 'http://localhost:4000/channels/mychannel/chaincodes/mycc',
          body: {
                "peers": ["peer0.org1.example.com","peer0.org2.example.com"],
                "fcn":'queryDocumentByOwner' ,
                "args":["a"]
              },
              json: true,
          method: 'POST'
        }, function (err, response, body) {

          console.log(typeof body);
          // var stringData=JSON.stringify(body)
          // var obData= JSON.parse(stringData)

       console.log("body",  body.myMessage);

        //console.log("response",response);
       // console.log(object);
        // let a= JSON.stringify(body.message );
        // console.log(a);

        notifier.notify({
          title: 'My notification',
          message: body.myMessage
        });

    res.send(body.myMessage)
        
        });
  }


  router.post('/download', function(req,res,next){

    filepath=req.body.filepath

    
    console.log(filepath);
   
    res.sendFile(path.resolve(__dirname+"/../"+filepath));
});


router.post('/getVersion' ,(req,res)=>{
console.log('##################IN  GET  VERSION  #############################');
let filename=req.body.filename;
 
getVersion(req,res,filename)


} )

function getVersion(req,res,filename){
  console.log("##################in get version function################3");


  request({
    headers: {
        'content-type': 'application/json',
        'authorization' :req.headers.authorization
    },
    uri: 'http://localhost:4000/channels/mychannel/chaincodes/mycc',
    body: {
          "peers": ["peer0.org1.example.com","peer0.org2.example.com"],
          "fcn":'getHistoryForDocumnent' ,
          "args":[filename]
        },
        json: true,
    method: 'POST'
  }, function (err, response, body) {

    console.log("##################response################3");
    console.log(typeof body);
    // var stringData=JSON.stringify(body)
    // var obData= JSON.parse(stringData)

 console.log("body",  body);

  //console.log("response",response);
 // console.log(object);
  // let a= JSON.stringify(body.message );
  // console.log(a);

  notifier.notify({
    title: 'My notification',
    message: body
  });

res.send(body.myMessage)
  
  });



}


module.exports = router;
