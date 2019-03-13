import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {FileUploadComponent} from './file-upload/file-upload.component'
import {ViewDocsComponent} from './view-docs/view-docs.component'

const routes: Routes = [

{ path: 'home', component: HomeComponent },
{path: 'upload' , component: FileUploadComponent},
{path :  'Docs' , component:ViewDocsComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
