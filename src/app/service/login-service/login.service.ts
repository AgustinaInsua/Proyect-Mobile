import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './../api-service/api.service';
import { USERS_LOGIN } from './../../model/mocks/mock-usersLogin';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.apiURL;
  constructor(private apiService: ApiService) {}

  existUser(user: User) {
    return USERS_LOGIN.some((obj) => {
      return obj.email === user.email && obj.password === user.password;
    })
      ? HttpStatusCode.Ok
      : HttpStatusCode.Unauthorized;
  }

  validateUser(user: User) {
    return this.apiService.post(this.url + 'login', user);
  }
}
