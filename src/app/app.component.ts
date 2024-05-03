import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { AsideComponent } from './components/aside/aside.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster, AsideComponent, BookFormComponent, MatFormFieldModule, MatInputModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'libmanagement-app';
  protected readonly toast = toast;
}
