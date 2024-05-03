import { Component } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  bookForm = this.fb.group({
    title: ['', Validators.required],
    publicationYear: ['', Validators.required],
    publisher: ['', Validators.required],
    editionYear: ['', Validators.required],
    pages: ['', Validators.required],
    ageRating: ['', Validators.required],
    isArchived: ['', Validators.required],
    author: this.fb.array([
      this.fb.group({name: ['']})
    ]),
    numberOfCopies: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  get authors() {
    return this.bookForm.get('author') as FormArray;
  }

  addAuthor(): void {
    this.authors.push(this.fb.group({
      name: ''
    }));
  }

  removeAuthor(index: number): void {
    this.authors.removeAt(index);
  }

  onSubmit() {
    console.log(this.bookForm.value);
  }

}
