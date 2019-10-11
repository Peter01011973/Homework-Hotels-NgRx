import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {

  constructor() { }

  public isAuth() {
    const tokenUser:string = localStorage.getItem('tokenUser');
    return (tokenUser === 'Yes');
  }
}
