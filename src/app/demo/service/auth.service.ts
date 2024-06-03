import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    // Remplace cette URL par l'URL réelle de ton endpoint d'authentification
    const loginUrl = 'http://localhost:8090/api/login';

    // Envoyer la requête POST avec les informations d'identification
    return this.http.post<any>(loginUrl, { email, password })

  }
  getToken(): string | null {
    return localStorage.getItem('x');
  }


  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Si le token existe, l'utilisateur est considéré comme authentifié
  }
  signUp(signUpData:any): Observable<any> {
    const loginUrl = 'http://localhost:8090/api/register'
    return this.http.post<any>(loginUrl, signUpData)
  }
  
}
