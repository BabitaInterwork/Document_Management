import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocRequestService {
  authToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTI1MDQ2MzcsInVzZXJuYW1lIjoiQmFycnkiLCJvcmdOYW1lIjoiT3JnMiIsImlhdCI6MTU1MjQ2ODYzN30.Eyq2d4wjZgzbYJ_xq8Y9ttReGb22NEcH0lX6AGFLnSU'

  configUrl = 'http://localhost:4000/doc/getDocs';

  constructor(private http: HttpClient) { }

  getDocs() {


 
  const headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+this.authToken
  });
  
    return this.http.get(this.configUrl,{headers:headers});
  }
}

