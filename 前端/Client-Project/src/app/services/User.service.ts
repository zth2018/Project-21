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
  account: string;
  constructor(private http: HttpClient, private router: Router, private message: NzMessageService) {
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
  }//----------------------------------------------------------------------------------------------------------------------------
 
  Login(account:string,pw:string,remember:boolean,how:number):void {    
     
    if (account != null && pw != null) {
      this.http.get<any>(this.serveurl + "/login?account=" + account + "&password=" + pw+"&how="+how).subscribe((data: any) => {
        if (data.result == true) {
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("account", account);
          localStorage.setItem("uid", data.data.id);
          localStorage.setItem("username", data.data.username);
          this.refreshtoken();
          this.getpersoninfo(data.data.id, (callback: any) => {
            console.log("mark")
            localStorage.setItem("role", callback.data.role);
            this.router.navigateByUrl("homepage");
          })
          if (remember == true) {
            localStorage.setItem("remember", pw);          
          }
          //this.router.navigateByUrl("homepage");
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
          this.Login(phone, password, false, 1);
        } else {
          this.message.warning(data.message);
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


  getalluserinfo(callback){
    this.http.get(this.serveurl + "/user?account=" + this.account, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } 
      callback(data.data);
    }, error => {
      this.errorprocessor(error, "获取用户信息失败");
    });

  }//---------------------------------------------------------------------------------------------------------------------------

  adduserbym(data: any) {
    if (data.username == null || data.password == null||data.phone==null) { this.message.warning("添加用户失败，至少需要填入用户名、手机号及密码"); } else {
      var info = { "id_n": data.id_n,"name": data.name, "school": data.school, "institution": data.institution, "gender": data.gender, "age": data.age, "role": data.role, "username": data.username, "phone": data.phone };
      this.http.post(this.serveurl + "/user?account=" + this.account + "&password=" + data.password, info, this.httpOptions).subscribe((data: any) => {
        if (data.result != true) {
          this.message.warning(data.message);
        } else {
          this.message.success("添加用户成功")
        }
      }, error => {
        this.errorprocessor(error, "添加用户失败");
      });
    }
  }//-----------------------------------------------------------------------------------------------------------------------------

  deleteuserbym(uid: string) {
    this.http.delete(this.serveurl + "/user?account=" + this.account + "&uid=" + uid, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } else {
        this.message.success("删除用户成功")
      }
    }, error => {
      this.errorprocessor(error, "删除用户失败");
    });
  }//-----------------------------------------------------------------------------------------------------------------------------

  updateuserinfo(data: any) {
    if (data.username == null || data.phone == null) { this.message.warning("用户失败，用户名、手机号不能为空"); } else {
      var info = { "id_n": data.id_n,"name": data.name, "school": data.school, "institution": data.institution, "gender": data.gender, "age": data.age, "role": data.role, "username": data.username, "phone": data.phone,"id":data.id };
      this.http.patch(this.serveurl + "/user?account=" + this.account, info, this.httpOptions).subscribe((data: any) => {
        if (data.result != true) {
          this.message.warning(data.message);
        } else {
          this.message.success("修改用户信息成功")
        }
      }, error => {
        this.errorprocessor(error, "修改用户信息失败");
      });
    }
  }//------------------------------------------------------------------------------------------------------------------------------

  updatepersoninfo(data: any) {
    this.http.post(this.serveurl + "/account?account=" + this.account, data, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } else {
        this.message.success("修改用户信息成功")
      }
    }, error => {
      this.errorprocessor(error, "修改用户信息失败");
    });
  }//------------------------------------------------------------------------------------------------------------------------------



  changepassword(old: string, _new: string) {
    var uid = localStorage.getItem("uid");
    if (old == null || _new == null) { this.message.warning("请输入原密码和新密码") } else {
      this.http.patch(this.serveurl + "/account?account=" + this.account+"&uid="+uid+"&old="+old+"&_new="+_new,null, this.httpOptions).subscribe((data: any) => {
        if (data.result != true) {
          this.message.warning(data.message);
        } else {
          this.message.success("修改密码成功")
        }
      }, error => {
        this.errorprocessor(error, "修改密码失败");
      });
    }
  }//--------------------------------------------------------------------------------------------------------------------------------

  getpersoninfo(uid:string,callback) {
    this.http.get(this.serveurl + "/account?account=" + this.account + "&uid=" + uid, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } else {
        callback(data);
        this.message.success("获取个人信息成功")
      }
    }, error => {
      this.errorprocessor(error, "获取个人信息失败");
    });
  }//------------------------------------------------------------------------------------------------------------------------------



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
 

  


  
  refreshtoken() {
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
  }//------------------------------------------------------------------------------------------------

 
  errorprocessor(error: any, msg: string) {
    if (error.status == 0) {
      setTimeout(() => {
        this.router.navigateByUrl("/login");
      }, 3000);
      this.message.warning("令牌已失效," + msg + ",请重新登陆");
    }
  }//----------------------------------------------------------------------------------------------------------------------------

  

}//------------------------------------------------------------------------------------------------------------------------------




