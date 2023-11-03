import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = "http://localhost:8080/api/V1/auth";

  constructor( private http: HttpClient) { }

  login(credential: Credentials) {
    return this.http.post(`${this.baseUrl}/login`, credential);
  }
}
