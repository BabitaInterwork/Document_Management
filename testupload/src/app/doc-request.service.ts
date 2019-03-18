import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { getToken } from '@angular/router/src/utils/preactivation';


@Injectable({
  providedIn: 'root'
})
export class DocRequestService {
  authToken;

  configUrl = 'http://localhost:4000/doc/getDocs';

  constructor(private http: HttpClient) { }

  ngOnInit(){
// var user=   localStorage.getItem('currentUser')
// console.log("user===",user);
// var ObUser=JSON.parse(user);
// console.log("ObUSrer",ObUser);
// this.authToken=  ObUser.token;

  }


getToken(){
  var user=   localStorage.getItem('currentUser')
  
  var ObUser=JSON.parse(user);
  
  this.authToken= 'Bearer '+ObUser.token;
  


}

  getDocs() {

this.getToken()
console.log(`authToken  ${this.authToken}`);
 
  const headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+this.authToken
  });
  console.log("my token",this.authToken)
    return this.http.get(this.configUrl,{headers:headers});
    
  }




}

