import { Component } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsideComponent, LucideAngularModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
