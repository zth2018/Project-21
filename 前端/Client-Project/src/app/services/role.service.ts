import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Response } from '../interface/response';

import { error } from '@angular/compiler/src/util';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  httpOptions: any;
  serveurl: any = environment.ServeUrl;
  account: string;
  response: Response;

  constructor(private message: NzMessageService, private router: Router, private http: HttpClient) {
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
  }//---------------------------------------------------------------------------------------------------

  getallrole(callback):any {
    this.http.get(this.serveurl + "/role?account=" + this.account,this.httpOptions).subscribe(data => {
      this.response = {
        result: data['result'],
        message: data['message'],
        token: data['token'],
        data: data['data']
      }
      callback(this.response);
    }, error => {
      this.errorprocessor(error, "获取角色列表失败");
    });   
  }//--------------------------------------------------------------------------------------------------

  addrole(role_name:string): any {
    this.http.post<any>(this.serveurl + "/role?account=" + this.account + "&role_name=" + role_name,null, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } else { this.message.success("添加角色成功");}
      
    }, error => {
      this.errorprocessor(error, "添加角色失败");
    });
  }//-------------------------------------------------------------------------------------------------

  deleterole(role_id: string): any {
    this.http.delete(this.serveurl + "/role?account=" + this.account + "&role_id=" + role_id, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } else { this.message.success("删除角色成功"); }
     
    }, error => {
      this.errorprocessor(error, "删除角色失败");
    });
  }//-------------------------------------------------------------------------------------------------

  updaterole(role_name: string, id: string): any {
    var role = { "role_name": role_name, "id": id};
    this.http.patch(this.serveurl + "/role?account=" + this.account,role, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } else {this.message.success("更新角色成功");}
      
    }, error => {
      this.errorprocessor(error, "更新角色失败");
    });
  }//-------------------------------------------------------------------------------------------------

  getpermissionlist(callback) {
    this.http.get(this.serveurl + "/permission?account=" + this.account, this.httpOptions).subscribe(data => {
      this.response = {
        result: data['result'],
        message: data['message'],
        token: data['token'],
        data: data['data']
      }
      callback(this.response);
    }, error => {
      this.errorprocessor(error, "获取权限列表失败");
    });   
  }//------------------------------------------------------------------------------------------------

  addrolepermission(role_name:string,permission:string) {
    this.http.post(this.serveurl + "/permission?account=" + this.account + "&role_name=" + role_name + "&permission=" + permission, null, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } else {
        this.message.success("添加角色权限成功");
      }    
    }, error => {
      this.errorprocessor(error, "添加角色权限失败");
    });
  }//-----------------------------------------------------------------------------------------------

  deleterolepermission(id:string) {
    this.http.delete(this.serveurl + "/permission?account=" + this.account + "&id=" + id, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.message.warning(data.message);
      } else { this.message.success("删除角色权限成功"); }
     
    }, error => {
      this.errorprocessor(error, "删除角色权限失败");
    });
  }//-----------------------------------------------------------------------------------------------

  //permissioncheck(ps:string,callback) {
  //  var uid = localStorage.getItem("uid");
  //  this.http.get(this.serveurl + "/permissioncheck?account=" + this.account + "&uid=" + uid + "&permission=" + ps, this.httpOptions).subscribe((data: any) => {
  //    callback(data);
  //  });
  //}

  permissioncheck(ps: string): Observable<any> {
    var uid = localStorage.getItem("uid");
    return this.http.get(this.serveurl + "/permissioncheck?account=" + this.account + "&uid=" + uid + "&permission=" + ps, this.httpOptions);

  }



  errorprocessor(error: any, msg: string) {
    if (error.status == 0) {
      setTimeout(() => {
        this.router.navigateByUrl("/login");
      }, 3000);
      this.message.warning("令牌已失效," + msg + ",请重新登陆");
    }
  }//-----------------------------------------------------------------------------------------------

  refreshtoken() {
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
  }//------------------------------------------------------------------------------------------------

}
