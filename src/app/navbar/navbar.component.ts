import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppUser } from './../model/app-user';
import { DepartmentService } from './../department.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 data;
 
appUser:AppUser;
  constructor(public auth:AuthService, 
    router:Router, 
   userService : UserService,
  private depar:DepartmentService
   ){
   auth.appUser$.subscribe(appUser=>this.appUser= appUser);
   auth.user$.subscribe(user=>{
     if(user){
userService.save(user);
       let returnUrl = localStorage.getItem('returnUrl');
       router.navigateByUrl(returnUrl);
     }
   });
  
 }
logout(){
this.auth.logout();
}
search(value)
{
 this.data= value;
  console.log(this.data);
}

  ngOnInit(): void {
  }

}
