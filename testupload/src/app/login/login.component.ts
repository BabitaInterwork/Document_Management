// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

// import { AuthenticateService } from '../authenticate.service';
// import {AlertService} from '../alert.service'  ;




// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService  } from '../alert.service';
import { appConfig } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthenticateService} from '../authenticate.service' ;

@Component({
 // moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    token

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticateService,
        private alertService: AlertService,
        private http: HttpClient
        ) { }


        
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {

        this.loading = true;


        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    
                    
                   // this.setToken()
                    
                
                    this.router.navigate([this.returnUrl]);

                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    
                });


               

                
                






    }




    setToken(){

        let tokenFromLocalStroage=localStorage.getItem('currentUser')
       console.log(`tokenFromLocalStroage  ${tokenFromLocalStroage}`);
        let tokenn= JSON.parse(tokenFromLocalStroage);
        console.log("as tokenn",tokenn);
        this.token=tokenn.token;
        console.log(`to k ${this.token}`);
   let   myToken={
token:this.token

   }
    
   this.http.post(appConfig.apiUrl + '/users/token' ,myToken)
    console.log('after.............');
    
    }
}