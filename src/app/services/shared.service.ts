import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  userId:any;
  isUserLoggedIn = new BehaviorSubject(false);
  
  constructor() { }

}
