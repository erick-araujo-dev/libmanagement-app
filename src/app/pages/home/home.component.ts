import { Component } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';
import { BookFormComponent } from "../../components/book-form/book-form.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [AsideComponent, BookFormComponent, CommonModule]
})
export class HomeComponent {

}
