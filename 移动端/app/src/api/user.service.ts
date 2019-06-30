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
    this.account = 'account';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'InitialToken'
      })
    };
   }//--------------------------------------------------------------------------------------------------

   login(account:string,pw:string,how:any){
    if (account != null && pw != null) {
      this.http.get(this.serveurl + "/login?account=" + account + "&password=" + pw+"&how="+how).subscribe((data: any) => {
        if (data.result == true) {
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("account", account);
          localStorage.setItem("uid", data.data.id);
          localStorage.setItem("password",pw);
          localStorage.setItem("login_by",how);
          this.router.navigateByUrl("/tabs");
        } else{alert("账户或密码错误");}
      });
    }
   }//-----------------------------------------------------------------------------------------------------

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
   }//-----------------------------------------------------------------------------------------------------

   getallschool(callback):any {
    this.http.get<any>(this.serveurl + "/school?account=" + this.account, this.httpOptions).subscribe(data => {
      var response={
        data:data['data']
      }
      callback(response.data);
    }, error => {
      alert("请重新登陆");    
    }
    );
  }//-----------------------------------------------------------------------------------------------


  getallrole(callback):any {
    this.http.get(this.serveurl + "/role?account=" + this.account,this.httpOptions).subscribe(data => {
      var response={
        data:data['data']
      }
      callback(response.data);
    }, error => {
      alert("请重新登陆");
    });   
  }//--------------------------------------------------------------------------------------------------

  getpersoninfo(uid:string,callback) {
    this.http.get(this.serveurl + "/account?account=" + this.account + "&uid=" + uid, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        alert(data.message);
      } else {
        callback(data);
      }
    }, error => {
      alert("请重新登陆");
    });
  }//------------------------------------------------------------------------------------------------------------------------------


  updatepersoninfo(data: any) {
    this.http.post(this.serveurl + "/account?account=" + this.account, data, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
       alert(data.message)
      } else{alert("保存成功")}
    }, error => {
      alert("请重新登陆")
    });
  }//------------------------------------------------------------------------------------------------------------------------------

  changerpassword(old:string,new_:string,new_confirm:string){
    if(new_==new_confirm&&new_!=null&&old!=null){
    var uid=localStorage.getItem("uid")
    this.http.patch(this.serveurl + "/account?account=" + this.account+"&uid="+uid+"&old="+old+"&_new="+new_, null, this.httpOptions).subscribe((data: any) => {
      alert(data.message)
    }, error => {
      alert("请重新登陆")
    });
  }else{
    alert("修改密码失败，两次输入的新密码不同")
  }
  }


  refreshuser(){
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
  }

}//------------------------------------------------------------------------------------------
