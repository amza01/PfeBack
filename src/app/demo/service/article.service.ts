import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {private apiUrl = 'http://localhost:8090/api/articles'; // Remplacez ceci par l'URL de votre API

constructor(private http: HttpClient) { }

create(article: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' // Spécifiez le type de contenu JSON
    })
  };
  return this.http.post<any>(`${this.apiUrl}`, article,httpOptions);
}
getAllArticles(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
updateArticle(article: any,idArticle:number): Observable<any> {
  const url = `${this.apiUrl}/${idArticle}`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.put(url, article, httpOptions);
}

deleteArticle(id: number): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url);
}

}
