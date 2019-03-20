import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import { Injectable } from "@angular/core";
//import 'rxjs/Rx';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  authToken 

  constructor(private http:HttpClient) { }


  ngOnInit(){
   this.authToken= JSON.parse(localStorage.getItem("currentUser")).token


  }

  downloadFile(filepath:String,filename:String ){

    var body = {filename:filename ,  filepath:filepath };


    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.authToken
    });
  

    return this.http.post('http://localhost:4000/doc/download',body,{
        responseType : 'blob',
        headers:headers

    });
}


showversion(event,filename:String){
  console.log('====in showversion=====')


  const headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+this.authToken
  });

  var body = {filename:filename};
   return  this.http.post('http://localhost:4000/doc/getVersion',JSON.stringify(body),{
      headers:headers
  })




}






}
