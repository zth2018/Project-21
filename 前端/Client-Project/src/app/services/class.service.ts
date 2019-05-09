import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  serveurl: any = environment.ServeUrl;


  constructor(private http: HttpClient) {
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
  }


  getclass() {
    

  }











}
