// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticateService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { appConfig } from './app.config';


@Injectable()
export class AuthenticateService {
  token ;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {


        return this.http.post<any>(appConfig.apiUrl + '/user/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));



                    
                    



                }

                return user;

            });



           

             





    }

setToken(){

    let tokenFromLocalStroage=localStorage.getItem('currentUser')
    this.token= JSON.parse(tokenFromLocalStroage).token;
    console.log(`to k ${this.token}`);


this.http.post<any>(appConfig.apiUrl + '/users/token', { token:this.token }).map( message =>console.log(message) )
console.log('after.............');

}


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}