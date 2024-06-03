import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  private baseUrl = 'http://localhost:8090/api/devis'; 
  constructor(private http: HttpClient) {}

  createdevis(devis: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.baseUrl,devis,httpOptions);
  }
  getdevis(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  deletedevis(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
  updateStatus(commandeId: number): Observable<any> {
    const url = `${this.baseUrl}/update/${commandeId}`;
    return this.http.get<any>(url);
  }
  generateReport(code: string): Observable<any> {
    const url = `${this.baseUrl}/rapport/${code}`;
  
    return this.http.get<string>(url);
  }
}
