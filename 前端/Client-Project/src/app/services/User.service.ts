import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router} from '@angular/router';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Response } from '../interface/response'


interface login {
  result: boolean;
  msg: string;
  token: string;
  //username: string;
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

  response: Response;
  user: User;
  serveurl: any = environment.ServeUrl;

  constructor(private http: HttpClient,private router:Router) {
   
  }
  //---------------------------------------------------------------------------------------------------------------------------
     Login(phone:string,pw:string,rt):void {    
        if (phone != null && pw != null) {
          this.http.get<Response>(this.serveurl+ "/login?phone=" + phone + "&password=" + pw, {
            responseType:"json"
          }).subscribe(data => {
            this.response = {
              result: data['result'],
              message: data['message'],
              token: data['token'],
              data:data['data']
            }
            localStorage.setItem("userphone", phone);
            localStorage.setItem("token", JSON.stringify(this.response.token));
            rt(this.response);
          })
        }
      }

  //-------------------------------------
    Register(username: string, password: string, phone: string) { 
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': ""
          })
        };
        this.user = {
          username: username,
          phone: phone,
          password:password
        }
        this.http.post<Response>(this.serveurl + "/register",this.user , httpOptions).subscribe(data => {
          if (data.result) {
            this.Login(phone, password, (rt: any) => {
              this.router.navigateByUrl("homepage");
            });
          }
        })
  }
  //--------------------------------------
      checkphone(phone: string,rt) {
          this.http.get<boolean>(this.serveurl  + "/register?phone=" + phone, {
            responseType:"json"
          }).subscribe(result => {
            rt(result);
          })
        }

  //---------------------------------------------------------------------------------------------------------------------------


 

 

  



 
  

  

}




