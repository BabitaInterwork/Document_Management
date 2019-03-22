import { Component, OnInit } from '@angular/core';
import {DocRequestService} from '../doc-request.service'
import { Router } from '@angular/router';
import { FileServiceService } from './../file-service.service';
import { saveAs } from 'file-saver';
import { HttpClient,HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-view-docs',
  templateUrl: './view-docs.component.html',
  styleUrls: ['./view-docs.component.css']
})
export class ViewDocsComponent implements OnInit {
Docs:string
DocsOb:object
current: number = 0;
private _loading: boolean = false;

private _loadingforVersion: boolean = false;
versionfiles :any = [];
  panelExpanded = true;

p: number = 1;
//collection: any[] = ;  

downloadLocation :string="http://localhost/"



  constructor(private DocsService :DocRequestService,
    private router :Router,
    private _fileService:FileServiceService
    ) { }

  ngOnInit() {

    this.DocsService.getDocs().subscribe(  data=>{
      console.log("my data =" , data);
      
      this.DocsOb=data;
     // console.log("My message",data);

 
      this.Docs= JSON.stringify(data)
      if(this.Docs != null || 'undefined' ){

        this._loading=true
      }
      
      console.log(this._loading);
      
      } )
  
  
  }


  Doc(){
    
  console.log('clicked'  );

  
  console.log(this.Docs)
    

  }




  download(event ,  filepath:string, filename:string){
   console.log("inside download");


    this._fileService.downloadFile( filepath, filename)

    .subscribe(
        data =>  saveAs(data, filename),
        error => console.error(error)
    );
}


showversion(event, filename:String){

  this._loadingforVersion=true;

this._fileService.showversion(event,filename).
subscribe(data => {
  

 this.versionfiles=data;

 if(this.versionfiles == null || 'undefined' ){

  this._loadingforVersion=false
}

 console.log(this.versionfiles)
 });


}



}
