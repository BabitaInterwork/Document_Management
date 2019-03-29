import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
//import { GetDocsComponent } from './get-docs/get-docs.component';
import { ViewDocsComponent } from './view-docs/view-docs.component';
//import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';  
import { FormsModule }   from '@angular/forms';
import {AuthGuard} from './auth.guard' ;
import {AlertService} from './alert.service' 
import {UserService} from './user.service' ;
import {JwtInterceptorProvider} from './helpers/jwt.interceptor' ;
import {ErrorInterceptorProvider} from './helpers/error.interceptor'
import {AuthenticateService}  from './authenticate.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- import the module
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    
    AppComponent,
    FileSelectDirective,
    NavComponent,
    FileUploadComponent,
    
    ViewDocsComponent,
    
    LoginComponent,
    
    AlertComponent,
    
    DashboardComponent,
    
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule ,
    NgxPaginationModule,
    NbThemeModule.forRoot(),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
    NgFlashMessagesModule.forRoot()
  ],

  providers: [
    NbSidebarService,
    AuthGuard,
    AlertService,
    AuthenticateService,
    UserService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
