import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router:Router;

  constructor(private auth: AuthService,
    ) { }

  login(){
    
    this.auth.login(); 
    this.router.navigate(['']);
    
  }
  ngOnInit(): void {
  }

}
