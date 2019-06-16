import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router }from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  serveurl: any = environment.ServeUrl;
  httpOptions: any;
  account: string;
  constructor(private http:HttpClient,private router:Router) {
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
   }//--------------------------------------------------------------------------------------------------

   login(account:string,pw:string,how:number){
    if (account != null && pw != null) {
      this.http.get(this.serveurl + "/login?account=" + account + "&password=" + pw+"&how="+how).subscribe((data: any) => {
        if (data.result == true) {
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("account", account);
          localStorage.setItem("uid", data.data.id);
          this.router.navigateByUrl("/tabs");
        } else{alert("账户或密码错误");}
      });
    }
   }//---------------------------------------------------------------------------------------------------

   register(username:string,phone:string,password:string){
     var user = {"username": username,"phone": phone,"password":password};
     if(username!=null&&phone!=null&&password!=null){
        this.http.post<any>(this.serveurl+"/register",user,this.httpOptions).subscribe((data:any)=>{
          if(data.result){
            this.login(phone,password,1);
          }else{
            alert(data.message);
          }
        },error=>{alert("注册失败，用户名或手机号已被注册")}
        );
     }
       
     
   }


}//------------------------------------------------------------------------------------------
