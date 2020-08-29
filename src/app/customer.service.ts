import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiserv:ApiService) { }

  getCustServ():Observable<any>{

    return this.apiserv.getApiServ();

  }
}
