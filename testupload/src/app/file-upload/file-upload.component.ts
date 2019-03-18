import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { NgFlashMessageService } from 'ng-flash-messages';


const URL = 'http://localhost:4000/doc/upload';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  authToken

  constructor(private ngFlashMessageService: NgFlashMessageService) { }

  public uploader:FileUploader = new FileUploader({url: URL,headers:[{name:'authorization',value:this.authToken}], itemAlias: 'photo'});
  
  title = 'app works!';

  ngOnInit() {


    var user=   localStorage.getItem('currentUser')
  
    var ObUser=JSON.parse(user);
    
    this.authToken='Bearer '+ObUser.token;
    console.log(`This auth token ${this.authToken} ` );
    
  
   
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         console.log("ImageUpload:uploaded:", item, status, response);
      alert('file uploaded successfully !')

         this.ngFlashMessageService.showFlashMessage({
          
          messages: ["Yah! i'm alive"], 
         
          dismissible: true, 
         
          timeout: 5000,
         
          type: 'danger'
          
        });
     };
 }

}
