import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NgForm } from '@angular/forms';
import { CategoriesService } from "../categories.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password:string;
  logged = false;


  constructor(
    private categoriesService:CategoriesService,
    private location: Location,) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token){
    }
  }

  login() {
    // console.log(form.value)
    // if (this.authService.login(form.value.username, form.value.password)){
    //   alert('WELCOME ADMIN');
    //   this.goBack();
    // }else {
    //   alert('PLEASE TRY AGAIN');
    // }
    // let {username, password} = loginForm.value;
    // console.log(username, password);
    this.categoriesService.login(this.username, this.password)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.logged = true;
        this.username = '';
        this.password = '';
        this.goCategories();
        location.reload();
    })
  }

  goBack(): void {
    this.location.back();
  }
  goCategories(): void {
    this.location.go('/categories');
  }

}
