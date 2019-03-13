import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import { Injectable } from "@angular/core";
//import 'rxjs/Rx';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  authToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTI1MDQ2MzcsInVzZXJuYW1lIjoiQmFycnkiLCJvcmdOYW1lIjoiT3JnMiIsImlhdCI6MTU1MjQ2ODYzN30.Eyq2d4wjZgzbYJ_xq8Y9ttReGb22NEcH0lX6AGFLnSU'


  constructor(private http:HttpClient) { }

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



}
