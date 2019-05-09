import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router} from '@angular/router';

interface login {
  result: boolean;
  msg: string;
  taken: string;
  username: string;
  phone: string;

}

interface User {
  username: string;
  password: string;
  phone: string;
}



@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string;
  loginIfo: login;
  user: User;

  serveurl: any = environment.ServeUrl;

  constructor(private http: HttpClient,private router:Router) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
   
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
          username: data['username'],
          phone: data['phone']
        }
        localStorage.setItem("login", JSON.stringify(this.loginIfo));
        rt(this.loginIfo);
      })
    }

  }

  Register(username: string, password: string, phone: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.user = {
      username: username,
      phone: phone,
      password:password
    }
    this.http.post<any>(this.serveurl + "/user" + "/register",this.user , httpOptions).subscribe(data => {
      if (data == 1) {
        this.Login(phone, password, (rt: any) => {
          this.router.navigateByUrl("homepage");
        });
      }

    })

  }



  GetUserphone() {
    return JSON.parse(localStorage.getItem("Userphone"));
  }
  GetUsername() {
    this.loginIfo = JSON.parse(localStorage.getItem("login"));
    return this.loginIfo.username;
  }

  checkphone(phone: string,rt) {
    this.http.get(this.serveurl + "/user" + "/checkphone?phone=" + phone, {
      responseType:"json"
    }).subscribe(result => {
      rt(result);

    })


      

  }

}




  //this.http.get<string>("http://192.168.1.141:8080/login?id=" + this.id, {
    //  responseType: "json"
    //}).subscribe(json => {
    //  console.log("Response: " + json);
    //  this.username = json;
    //});
