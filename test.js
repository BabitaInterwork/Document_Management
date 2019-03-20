import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-download-document',
  templateUrl: './download-document.component.html',
  styleUrls: ['./download-document.component.css']
})
export class DownloadDocumentComponent implements OnInit {

  current: number = 0;
  p: number = 1;
  data: any = [];
  versionfiles :any = [];
  panelExpanded = true;
  loading ;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.loading=true;
    const token = JSON.parse(localStorage.getItem("currentUser")).token;

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('authorization','Bearer '+token)
headers=headers.append('Content-Type','application/json');

        this.http.post('http://localhost:4000/download/listdoc','',{
        headers: headers
        })
        .subscribe(data => {
          this.loading=false;
        console.log(data);
        this.data=data;
        });




  }

  downloadFile(event,filepath:String,filename:String){

    console.log('---in download----------')
    console.log(filepath)
    var body = {filepath:filepath}
    const token = JSON.parse(localStorage.getItem("currentUser")).token;

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('authorization','Bearer '+token)
headers=headers.append('Content-Type','application/json');
    this.http.post('http://localhost:4000/download/downloaddoc',JSON.stringify(body),{
        responseType : 'blob',
        headers:headers
    })
    .subscribe(
      result => saveAs(result,filename),
      error => console.error(error)
  )
}


showversion(event,filename:String){
  console.log('====in showversion=====')
  let headers: HttpHeaders = new HttpHeaders();
  const token = JSON.parse(localStorage.getItem("currentUser")).token;

headers = headers.append('authorization','Bearer '+token)
headers=headers.append('Content-Type','application/json');
  console.log(filename);

  var body = {filename:filename};
  this.http.post('http://localhost:4000/download/getversion',JSON.stringify(body),{
      headers:headers
  })
  .subscribe(data => {
   this.loading =false;


  this.versionfiles=data;
  console.log(this.versionfiles)
  });




}





}
