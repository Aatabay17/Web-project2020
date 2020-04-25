import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from "../auth.service";
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  logged = false;
  constructor(
    private authService: AuthService,
    private location: Location,
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    /*const token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }*/
  }

  loginUser(username, password){
    this.authService.login(username, password);
  }
  signUp(){
    this.location.go('signup')
  }
  /*login(){
    this.categoryService.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }*/
}
