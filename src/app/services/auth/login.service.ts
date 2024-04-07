import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  postMapping: string = "auth"

  constructor(private api: ApiService) { }

  login(email: string, password: string){
    return this.api.post<LoginResponse>(this.postMapping + "/login", { email, password }).pipe(
      tap((value: LoginResponse) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("name", value.name)
        sessionStorage.setItem("role", value.role)
      })
    )
  }

  signup(name: string, email: string, password: string){
    return this.api.post<LoginResponse>(this.postMapping + "/register", { name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
      })
    )
  }
}