import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {FileUploadComponent} from './file-upload/file-upload.component'
import {ViewDocsComponent} from './view-docs/view-docs.component'
import {LoginComponent} from './login/login.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [

{ path: 'home', component: HomeComponent , },
{path: 'upload' , component: FileUploadComponent  ,canActivate: [AuthGuard] },
{path :  'Docs' , component:ViewDocsComponent ,canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent   },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
