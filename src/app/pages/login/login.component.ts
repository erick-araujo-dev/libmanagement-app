import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log("Dados do formulário:", formData);
      // Aqui você pode chamar um serviço para fazer a autenticação e verificar a senha no backend
      // Se a senha for inválida, atualize a propriedade invalidPassword para true
      // this.authService.login(formData.email, formData.password).subscribe(response => {
      //   if (response.invalidPassword) {
      //     this.invalidPassword = true;
      //   }
      // });

      // Simulando uma resposta do backend para senha inválida
      setTimeout(() => {
        this.invalidPassword = true;
      }, 2000);
    } else {
      this.loginForm.markAllAsTouched(); // Marcar todos os controles de formulário como "touched"
    }
  }

  clearInvalidPassword() {
    this.invalidPassword = false;
  }


}
