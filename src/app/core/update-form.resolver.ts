import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpServiceService } from '../services/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateFormResolver implements Resolve<boolean> {

  constructor(private http: HttpServiceService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let id = route.paramMap.get('id');
    return this.http.retrieveSingleFormulaireRecords(id);
  }
}
