import { Component } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
