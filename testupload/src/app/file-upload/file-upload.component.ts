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
 
  constructor(private ngFlashMessageService: NgFlashMessageService) { }

 
  
  
  public uploader:FileUploader = new FileUploader({url: URL ,authToken: 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token , itemAlias: 'photo'});


  ngOnInit() {
    


   
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; }
    
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {

         console.log("ImageUpload:uploaded:", item, status, response);
      alert('file uploaded successfully !')

         
     };


 }



 

}
