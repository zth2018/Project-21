import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';


interface login {
  result: boolean;
  meg: string;
}




@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string;
  isLogin: boolean;


  serveurl: any = environment.ServeUrl;

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
   
  }

  getUsername(){
    return this.username;
  }

  Login(id:string,pw:string) {    
  
    console.log(id);
    console.log(pw);
    
    this.username = id;
    //if (id != null && pw != null) {
    //  this.http.get<login>(this.serveurl + "/login?id=" + id + "&pw=" + pw, {
    //    responseType:"json"
    //  }).subscribe(data => {

    //  })


    //}
  }

  RememberUsernam(id:string) {
    localStorage.setItem("UserName", JSON.stringify(id));
  }

  GetLocalUserName() {
    return JSON.parse(localStorage.getItem("UserName"));
  }


}




  //this.http.get<string>("http://192.168.1.141:8080/login?id=" + this.id, {
    //  responseType: "json"
    //}).subscribe(json => {
    //  console.log("Response: " + json);
    //  this.username = json;
    //});
