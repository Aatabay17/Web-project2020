import { Injectable } from '@angular/core';
import { User } from './user';
import { Location } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:User;
  constructor(
    private location: Location
  ) { }
  login(username:string, password:string) {
    if(username === 'admin' && password === 'admin123') {
      this.user = {
        id: 1,  
        username: username,
        password: password,
      }
      this.location.go('categories')
    }else {
      alert("Wrong Password or Username")
      this.location.go('login')
    }
  }
  isAuthorized() {
    return !!this.user;
  }
}
