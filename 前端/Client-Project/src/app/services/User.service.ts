import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router} from '@angular/router';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Response } from '../interface/response'

import { NzMessageService } from 'ng-zorro-antd';







@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions: any;
  response: Response;
  serveurl: any = environment.ServeUrl;

  constructor(private http: HttpClient, private router: Router,  private message: NzMessageService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
  }//----------------------------------------------------------------------------------------------------------------------------
 
  Login(username:string,pw:string,remember:boolean):void {    
     
    if (username != null && pw != null) {
      this.http.get<any>(this.serveurl + "/login?username=" + username + "&password=" + pw).subscribe((data: any) => {
        if (data.result == true) {
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("username", username);
          if (remember == true) { localStorage.setItem("remember", username); }
          this.router.navigateByUrl("homepage");
        } else {
          this.message.warning(data.message);
        }
      }, error => { this.errorprocessor(error,"登陆失败") });
    }
  }//---------------------------------------------------------------------------------------------------------------------------
  
 
  Register(username: string, password: string, phone: string) { 
    var user = {"username": username,"phone": phone,"password":password}
      this.http.post<Response>(this.serveurl + "/register",user, this.httpOptions).subscribe((data:any) => {
      if (data.result) {
        this.Login(phone, password, false);
      }
    });
  }//---------------------------------------------------------------------------------------------------------------------------
  
  checkphone(phone: string,rt) {
          this.http.get<boolean>(this.serveurl  + "/register?phone=" + phone, {
            responseType:"json"
          }).subscribe(result => {
            rt(result);
          })
 }//----------------------------------------------------------------------------------------------------------------------------




  getclassmemberfor(class_id: string): any {
    this.http.get<any>("http://localhost:8080/class/getuser?class_id=" + class_id,this.httpOptions).subscribe(data => {
     
    });

  }//--------------------------------------------------------------------------------------------------------------------------- 


 


 
  test() {
    this.http.get<any>("http://localhost:8080/test/3").subscribe(data => { }, error => {
      console.log(error);
      this.message.warning(error.status, { nzDuration: 3000 }).onClose.subscribe(() => { console.log("close") });
    });
  }//---------------------------------------------------------------------------------------------------------------------------
 

  


  


 
  errorprocessor(error: any, msg: string) {
    if (error.status == 0) {
      setTimeout(() => {
        this.router.navigateByUrl("/login");
      }, 3000);
      this.message.warning("令牌已失效," + msg + ",请重新登陆");
    }
  }//----------------------------------------------------------------------------------------------------------------------------

  

}//------------------------------------------------------------------------------------------------------------------------------




