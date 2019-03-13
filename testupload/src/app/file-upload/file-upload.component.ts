import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { NgFlashMessageService } from 'ng-flash-messages';


const URL = 'http://localhost:4000/doc/upload';

const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTI1MDQ2MzcsInVzZXJuYW1lIjoiQmFycnkiLCJvcmdOYW1lIjoiT3JnMiIsImlhdCI6MTU1MjQ2ODYzN30.Eyq2d4wjZgzbYJ_xq8Y9ttReGb22NEcH0lX6AGFLnSU'


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private ngFlashMessageService: NgFlashMessageService) { }

  public uploader:FileUploader = new FileUploader({url: URL,headers:[{name:'authorization',value:'Bearer '+token}], itemAlias: 'photo'});
  
  title = 'app works!';

  ngOnInit() {
   
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
