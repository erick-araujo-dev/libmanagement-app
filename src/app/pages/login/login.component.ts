import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';

interface LoginForm {
  email: FormControl,
  password: FormControl
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title = "login";
  loginForm!: FormGroup<LoginForm>;
  invalidPassword = false;


  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  submitLoginForm() {
    toast.success("Sucesso ao entrar na aplicação", {
      class: "toast-success"
    })
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log("Dados do formulário:", formData);
      
      setTimeout(() => {
        toast.error("Credenciais inválidas. Por favor, verifique seu e-mail e senha e tente novamente.", {
          class: "toast-error"
        })
        this.invalidPassword = true;
      }, 2000);
    } else {
      this.loginForm.markAllAsTouched(); 
    }
  }

  clearInvalidPassword() {
    this.invalidPassword = false;
  }


}
