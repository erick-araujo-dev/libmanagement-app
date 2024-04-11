import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './auth/auth.guard';
export const routes: Routes = [
    { path: 'login', component: LoginComponent, },
    { path: 'app', component: HomeComponent, canActivate:[authGuard] },
    { path: '',redirectTo: 'app', pathMatch: 'prefix' }
]


