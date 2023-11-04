import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../model/auth.model';
import { BehaviorSubject } from 'rxjs';
import { AppStorage } from '../storage/app.storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = "http://localhost:8080/api/V1/auth";
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private appStorage: AppStorage) {
    this.isLoggedInSubject.next(!!this.appStorage.getToken());
  }

  login(credential: Credentials) {
    return this.http.post(`${this.baseUrl}/login`, credential);
  }

  isAuthenticated(): boolean {
    return !!this.appStorage.getToken();
  }


  //Cierra sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

}
