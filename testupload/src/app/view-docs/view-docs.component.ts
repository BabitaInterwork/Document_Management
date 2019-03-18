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

private _loading: boolean = false;

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
      // console.log( typeof data);
      // console.log( JSON.stringify(data) )
      // console.log("this",this.Docs);
      
      } )
  
  
  }


  Doc(){
    
  console.log('clicked'  );

  
  console.log(this.Docs)
    

  }




  download(event ,  filepath:string, filename:string){
   


    this._fileService.downloadFile( filepath, filename)

    .subscribe(
        data =>  saveAs(data, filename),
        error => console.error(error)
    );
}



}
