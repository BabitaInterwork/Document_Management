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
 

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    NavComponent,
    FileUploadComponent,
    HomeComponent,
    
    ViewDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
