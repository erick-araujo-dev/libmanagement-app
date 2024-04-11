import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toast } from 'ngx-sonner';
import { LoginService } from '../../services/auth/login.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../services/api/api.service';

interface LoginForm {
  email: FormControl,
  password: FormControl
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [
    LoginService,
    ApiService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title = "login";
  loginForm!: FormGroup<LoginForm>;
  invalidPassword = false;
  isLoading = false

  constructor(
    private router: Router,
    private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }



   submitLoginForm() {
    
    console.log(this.loginForm);
    

    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        toast.success("Login feito com sucesso!", {class: 'toast-success'});
        this.router.navigateByUrl('/app')
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            toast.error("E-mail ou senha inválidos!", { class: 'toast-error' })
          } else {
            toast.error("Erro ao tentar se comunicar com o servidor tente novamente mais tarde", { class: 'toast-error' })
          }
        }
      }
    })

    this.isLoading = false
  }
  clearInvalidPassword() {
    this.invalidPassword = false;
  }
}
