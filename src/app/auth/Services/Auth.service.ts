import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILoggedInResponse, ILogin, IRegister, IReset, IVerify } from '../models/Auth';
import { jwtDecode } from 'jwt-decode';
import { userGuard } from '../../core/Guards/user/user.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role: string = '';

  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }

  getProfile() {
    let encoded: string | null = localStorage.getItem('userToken');
    if (encoded !== null) {
      let decoded: ILoggedInResponse = jwtDecode(encoded);
      localStorage.setItem('role', decoded.userGroup);
      localStorage.setItem('userName', decoded.userName);
      this.getRole();
    }
  }

  getRole() {
    if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') !== null) {
      this.role = localStorage.getItem('role') ?? '';
    }
  }

  login(data: ILogin): Observable<ILogin | any> {
    return this._HttpClient.post<ILogin | any>('Users/Login', data)
  }

  register(data: FormData): Observable<IRegister> {
    return this._HttpClient.post<IRegister>('Users/Register', data);
  }

  verify(data: IVerify): Observable<IVerify> {
    return this._HttpClient.put<IVerify>('Users/verify', data)
  }

  forget(data: string): Observable<string> {
    return this._HttpClient.post<string>('Users/Reset/Request', data);
  }

  reset(data: IReset): Observable<IReset> {
    return this._HttpClient.post<IReset>('Users/Reset', data)
  }
}
