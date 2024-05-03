import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import {LucideAngularModule} from 'lucide-angular'
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    LucideAngularModule,
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {


  constructor(private loginService: LoginService, private router: Router, private activateRoute: ActivatedRoute) {}


  isActiveRoute(route: string) {

    const activatedRoute = this.activateRoute.snapshot.url[1].path
    

   return activatedRoute === route
    
  }


  onLogout() {    
    this.loginService.logout()
    this.router.navigate(['/login'])
  }

}
