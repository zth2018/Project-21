import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router} from '@angular/router';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Response } from '../interface/response'

import { NzMessageService } from 'ng-zorro-antd';

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
  httpOptions: any;
  response: Response;
  user: User;
  serveurl: any = environment.ServeUrl;

  constructor(private http: HttpClient, private router: Router,  private message: NzMessageService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
  }
  //---------------------------------------------------------------------------------------------------------------------------
     Login(username:string,pw:string,rt):void {    
        if (username != null && pw != null) {
          this.http.get<Response>(this.serveurl+ "/login?username=" + username + "&password=" + pw, {
            responseType:"json"
          }).subscribe(data => {
            this.response = {
              result: data['result'],
              message: data['message'],
              token: data['token'],
              data:data['data']
            }
            localStorage.setItem("username", username);
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
  //--------------------------------------
  getclassmemberfor(class_id: string): any {
    this.http.get<any>("http://localhost:8080/class/getuser?class_id=" + class_id,this.httpOptions).subscribe(data => {
     
    });

  }


  //---------------------------------------------------------------------------------------------------------------------------


 
  test() {



    //token = JSON.parse(token);
    //console.log(token);
    //token = JSON.stringify(token);
    //console.log(token);
 
    this.http.get<any>("http://localhost:8080/test/3").subscribe(data => { }, error => {
      console.log(error);
      this.message.warning(error.status, { nzDuration: 3000 }).onClose.subscribe(() => { console.log("close") });
    });


    //this.http.get<any>("http://localhost:8080/test/3").subscribe(data => {

    //});

  }
 

  



 
  

  

}




