import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './../api-service/api.service';
import { USERS_LOGIN } from './../../model/mocks/mock-usersLogin';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private apiService: ApiService) { }

  validateUser(user: User){
    return this.existUser(user);
  }

  existUser(user: User){
    return USERS_LOGIN.some((obj) =>{
      return (obj.email === user.email) && (obj.password === user.password)}) ? 
      HttpStatusCode.Ok : 
      HttpStatusCode.BadRequest;
  }

  }
  /*
  validateUser(user: User){
    this.apiService.get2(this.url+'login/', {"email" : "leanf@gmail.com"}).subscribe({next: companies => {
      console.log("TRUE");
    },
    error: (error: { message: any; }) =>{
      console.log("FALSE");
    }
  });
  }*/
