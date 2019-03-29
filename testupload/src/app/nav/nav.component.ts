import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {AuthGuard}  from '../auth.guard'  
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private router:Router  ) { }

  ngOnInit() {
  }


  onLogoutClick(){
    localStorage.clear();
    
    this.router.navigate(['/home']);
    return false;
      }


      loggedIn(){
if(localStorage.getItem('currentUser')){
  return true ;
}else{

  return false ;
}

      }

}
