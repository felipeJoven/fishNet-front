import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStorage {

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  clear() {
    localStorage.clear();
  }

}
