import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl ='http://localhost:8888';
  constructor(private httpClient: HttpClient) { }



  addNewRecord(body:any, userId:any) : Observable<any>{
         return this.httpClient.post(`${this.baseUrl}/formulaire/add/${userId}`, body);
  }


  retrieveSingleFormulaireRecords(formulaireId:any) : Observable<any>{
    return  this.httpClient.get(`${this.baseUrl}/formulaire/single/record/${formulaireId}`);
  }

  retrieveSingleFormula(userId:number) : Observable<any>{
    return  this.httpClient.get(`${this.baseUrl}/formulaire/record/${userId}`);
  }  

  retrieveAllUsers(id:number) : Observable<any>{
    return  this.httpClient.get(`${this.baseUrl}/formulaire/users/${id}`);
  }

  retrieveRecords() : Observable<any>{
         return  this.httpClient.get(`${this.baseUrl}/formulaire/all`);
  }
 
  retrieveUnregisteredRecords(adminId : number) : Observable<any>{
    return  this.httpClient.get(`${this.baseUrl}/formulaire/unregistered/users/${adminId}`);
}

   updateRecord(body:any, id:any) : Observable<any>{
    return  this.httpClient.put(`${this.baseUrl}/formulaire/update/${id}`, body);
    }

    deleteFormulaireRecord(id: number) : Observable<any>{
      return  this.httpClient.delete(`${this.baseUrl}/formulaire/delete/${id}`);
    }

    deleteUser(id: number) : Observable<any>{
      return  this.httpClient.delete(`${this.baseUrl}/formulaire/user/delete/${id}`);
    }
}
