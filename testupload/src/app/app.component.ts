import { Component } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
//define the constant url we would be uploading to.
//const URL = 'http://localhost:3000/upload';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    //This is the default title property created by the angular cli. Its responsible for the app works 
    title = 'DocManagement';
 
    ngOnInit() {
      // //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
      // this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      // //overide the onCompleteItem property of the uploader so we are 
      // //able to deal with the server response.
      // this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      //      console.log("ImageUpload:uploaded:", item, status, response);
      //  };
  }

}
