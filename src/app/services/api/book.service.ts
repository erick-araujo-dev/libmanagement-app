import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCreateRequest, BookCreateResponse, BookResponse, BookUpdateRequest } from '../../types/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../env.dev';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private urlBase = `${environment.apiUrl}/book`; 

  constructor(private api: HttpClient) { }

  createBook(bookRequestDTO: BookCreateRequest): Observable<BookCreateResponse> {
    const headers = this.getAuthorizationHeader();
    return this.api.post<BookCreateResponse>(`${this.urlBase}/create`, bookRequestDTO, { headers });
  }

  archiveBook(id: number): Observable<void> {
    const headers = this.getAuthorizationHeader();
    return this.api.put<void>(`${this.urlBase}/archive/${id}`, null, { headers });
  }

  unArchiveBook(id: number): Observable<void> {
    const headers = this.getAuthorizationHeader();
    return this.api.put<void>(`${this.urlBase}/un-archive/${id}`, null, { headers });
  }

  getAll(): Observable<BookResponse[]> {
    const headers = this.getAuthorizationHeader();
    return this.api.get<BookResponse[]>(`${this.urlBase}/all`, { headers });
  }

  getBook(id: number): Observable<BookResponse> {
    const headers = this.getAuthorizationHeader();
    return this.api.get<BookResponse>(`${this.urlBase}/${id}`, { headers });
  }

  updateBook(id: number, bookRequestDTO: BookUpdateRequest): Observable<void> {
    const headers = this.getAuthorizationHeader();
    return this.api.put<void>(`${this.urlBase}/update/${id}`, bookRequestDTO, { headers });
  }

  private getAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('@libmanagement:token');
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
    return new HttpHeaders();
  }
}
