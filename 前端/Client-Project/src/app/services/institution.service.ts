import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Response } from '../interface/response';
import { school } from '../interface/school';
import { error } from '@angular/compiler/src/util';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  httpOptions: any;
  serveurl: any = environment.ServeUrl;
  account: string;
  response: Response;

  constructor(private http: HttpClient,private messageservice:NzMessageService,private router:Router) {
    this.account = localStorage.getItem("account");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
    
  }//---------------------------------------------------------------------



  getallschool(callback):any {
    this.http.get<any>(this.serveurl + "/school?account=" + this.account, this.httpOptions).subscribe(data => {
      this.response = {
        result: data['result'],
        message: data['message'],
        token: data['token'],
        data: data['data']
      }
      callback(this.response);
    }, error => {
      this.errorprocessor(error, "获取学校列表失败");    
    }
    );
  }//-----------------------------------------------------------------------------------------------

  addschool(name: string, province: string, city: string) {
   
    var school = { "schoolname": name, "province": province, "city": city };
    this.http.post<any>(this.serveurl + "/school?account=" + this.account, school, this.httpOptions).subscribe((data: any) => {
      
      if (data.result != true) {
        this.messageservice.warning(data.message);
      } else {this.messageservice.success("添加学校成功"); }
      
      
    }, error => {
      this.errorprocessor(error,"添加学校失败");  
    });
  }//-----------------------------------------------------------------------------------------------

  deleteschool(school_id: string) {
    this.http.delete<any>(this.serveurl + "/school?account=" + this.account + "&id=" + school_id, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) { this.messageservice.warning(data.message); } else { this.messageservice.success("删除学校成功");}
      
    }, error => {
      this.errorprocessor(error,"删除学校失败");       
    });
  }//------------------------------------------------------------------------------------------------

  updateschool(data:school) {
    this.http.patch<any>(this.serveurl + "/school?account=" + this.account, data, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) {
        this.messageservice.warning(data.message);
      } else {this.messageservice.success("修改学校信息成功"); }
      
    }, error => {
      this.errorprocessor(error,"修改学校信息失败");  
    });
  }//------------------------------------------------------------------------------------------------

  addinstitution(school_id: string,institution:string) {
    this.http.post<any>(this.serveurl + "/institution?account=" + this.account + "&school_id=" + school_id + "&institution=" + institution,null,this.httpOptions).subscribe((data:any) => {
      if (data.result != true) {
        this.messageservice.warning(data.message);
      } else { this.messageservice.success("添加学院成功"); }
     
    }, error => {
      this.errorprocessor(error,"添加学院失败");  
    });
  }//----------------------------------------------------------------------------------------------

  deleteinstitution(id: string) {
    this.http.delete<any>(this.serveurl + "/institution?account=" + this.account + "&id=" + id, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) { this.messageservice.warning(data.message); } else {  this.messageservice.success("删除学院成功");}
     
    }, error => {
      this.errorprocessor(error,"删除学院失败");  
    });
  }//-----------------------------------------------------------------------------------------------

  updateinstitution(id: string, name: string) {
    this.http.patch<any>(this.serveurl + "/institution?account=" + this.account + "&id=" + id + "&institution=" + name, null, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) { this.messageservice.warning(data.message); } else { this.messageservice.success("修改学院信息成功");}
      
    }, error => {
      this.errorprocessor(error,"修改学院信息失败");  
      
    });
  }//-----------------------------------------------------------------------------------------------

  errorprocessor(error: any, msg: string) {
    if (error.status == 0) {
      setTimeout(() => {
        this.router.navigateByUrl("/login");
      }, 3000);
      this.messageservice.warning("令牌已失效," + msg + ",请重新登陆");
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
  }
  


}//-------------------------------------------------------------------------------------------------
