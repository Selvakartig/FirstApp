import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  counter:number;
  url:string;

  constructor(private http:HttpClient) {

    this.url="https://reqre.in/api/users?page="
    this.counter=2

   }

  getApiServ():Observable<any>{

    return this.http.get(this.url+this.counter).pipe(catchError(this.handleError));
  
  }

  handleError(error:HttpErrorResponse){

    if(error.status==0){
      console.log("Unknown error");
      
    }

    return throwError(error);
  }

}
