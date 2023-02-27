import { USERS_LOGIN } from './../../model/mocks/mock-usersLogin';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  validateUser(user: User){
    return USERS_LOGIN.some((obj) => {
      return (obj.email === user.email) && (obj.password === user.password)
    });
  }
}
