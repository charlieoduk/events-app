import { Injectable } from '@angular/core';
import { IUser } from './user.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:IUser

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      firstName: "John",
      lastName: "Papa",
      userName: "JP"
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
