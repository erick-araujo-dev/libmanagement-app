import { Injectable } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';
import { environment } from '../../../env.dev';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = `${environment.apiUrl}/auth`

  constructor(private api: HttpClient) { }

  login(email: string, password: string){
    return this.api.post<LoginResponse>(this.urlBase + "/login", { email, password })
  }

  setToken(token: string) {
    localStorage.setItem('@libmanagement:token', token)
  }

  getToken() {
    return localStorage.getItem('@libmanagement:token')
  }

  isAuthenticate() {
    return !!this.getToken()
  }

  logout() {
    localStorage.removeItem('@libmanagement:token')
  }

  signup(name: string, email: string, password: string){
    return this.api.post<LoginResponse>(this.urlBase + "/register", { name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
      })
    )
  }
}