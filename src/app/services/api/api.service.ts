import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8081'; 


  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`);
  }

  post(url: string, data: any) {
    return this.http.post(`${this.baseUrl}/${url}`, data);
  }

  put(url: string, data?: any) {
    if (data) {
      return this.http.put(`${this.baseUrl}/${url}`, data);
    } else {
      return this.http.put(`${this.baseUrl}/${url}`, {});
    }
  }

  patch(url: string, data: any) {
    return this.http.patch(`${this.baseUrl}/${url}`, data);
  }

  delete(url: string) {
    return this.http.delete(`${this.baseUrl}/${url}`);
  }

}
