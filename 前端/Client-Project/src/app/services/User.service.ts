import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';


interface login {
  result: boolean;
  msg: string;
  taken: string;
  username: string;
}




@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string;
  loginIfo: login;


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

  Login(phone:string,pw:string,rt):void {    

    if (phone != null && pw != null) {
      this.http.get<login>(this.serveurl+"/user" + "/login?phone=" + phone + "&password=" + pw, {
        responseType:"json"
      }).subscribe(data => {
        this.loginIfo = {
          result: data['result'],
          msg: data['msg'],
          taken: data['taken'],
          username:data['username']
        }
        localStorage.setItem("User", JSON.stringify(this.loginIfo));
        rt(this.loginIfo);
      })
    }

  }


  RememberUsernam(phone:string) {
    localStorage.setItem("Userphone", JSON.stringify(phone));
  }

  GetLocalUserName() {
    return JSON.parse(localStorage.getItem("Userphone"));
  }


}




  //this.http.get<string>("http://192.168.1.141:8080/login?id=" + this.id, {
    //  responseType: "json"
    //}).subscribe(json => {
    //  console.log("Response: " + json);
    //  this.username = json;
    //});
