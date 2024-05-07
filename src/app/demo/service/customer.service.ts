import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/demo/api/customer';
import { User1 } from '../api/user1';

@Injectable({
    providedIn: 'root',
})
export class CustomerService {
 
   
  
   // const Url = 'http://localhost:8090/api/user';
    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/demo/data/customers-small.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/demo/data/customers-medium.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/demo/data/customers-large.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }
    getSupplier() : Promise<any>{
        return this.http.get<any>('http://localhost:8090/api/getSupplier')
        .toPromise()
        .then(res => res as any);
}
getClient() : Promise<any>{
  return this.http.get<any>('http://localhost:8090/api/getClient')
  .toPromise()
  .then(res => res as any);
}
postUser(userJson: any) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json' // Spécifiez le type de contenu JSON
        })
      };
 
    return this.http.post<any>('http://localhost:8090/api/postClient', userJson,httpOptions);
}
postUser1(userJson: any) {
  const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // Spécifiez le type de contenu JSON
      })
    };

  return this.http.post<any>('http://localhost:8090/api/postSupplier', userJson,httpOptions);
}
editWorker(workerId:number,worker: any): Promise<Worker> {
 
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json' // Spécifiez le type de contenu JSON
        })
      };
      
    return this.http.put<Worker>(`http://localhost:8090/api/updateClient/${workerId}`, worker,httpOptions) // Utilisez HTTP PUT pour mettre à jour le travailleur
      .toPromise()
      .then(updatedWorker => updatedWorker as Worker) // Retourne le travailleur mis à jour
      .catch(error => {
        // Gérer les erreurs ici
        console.error('An error occurred while updating the worker:', error);
        throw error; // Lancer l'erreur pour la gérer à un niveau supérieur si nécessaire
      });
      
  }

  editWorker1(workerId:number,worker: any): Promise<Worker> {
 
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json' // Spécifiez le type de contenu JSON
        })
      };
      
    return this.http.put<Worker>(`http://localhost:8090/api/updateSupplier/${workerId}`, worker,httpOptions) // Utilisez HTTP PUT pour mettre à jour le travailleur
      .toPromise()
      .then(updatedWorker => updatedWorker as Worker) // Retourne le travailleur mis à jour
      .catch(error => {
        // Gérer les erreurs ici
        console.error('An error occurred while updating the worker:', error);
        throw error; // Lancer l'erreur pour la gérer à un niveau supérieur si nécessaire
      });
      
  }


  deleteWorkerLarge(workerId: string): Promise<any> {
      
    
    return this.http.delete<any>(`http://localhost:8090/api/deleteClient/${workerId}`)
      .toPromise()
      .then(response => response)
   
  }
  deleteWorkerLarge1(workerId: string): Promise<any> {
      
    
    return this.http.delete<any>(`http://localhost:8090/api/deleteSupplier/${workerId}`)
      .toPromise()
      .then(response => response)
   
  }


}
