import { Component } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
