import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Response } from '../interface/response';

import { error } from '@angular/compiler/src/util';
import { NzMessageService } from 'ng-zorro-antd';
@Injectable({
  providedIn: 'root'
})
export class InsititutionService {
  httpOptions: any;
  serveurl: any = environment.ServeUrl;
  username: string;
  response: Response;
  constructor(private http: HttpClient,private messageservice:NzMessageService) {
    this.username = localStorage.getItem("username");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };

  }//-------------------------------------

  getallschool(callback):any {
    this.http.get<any>(this.serveurl + "/school?username=" + this.username, this.httpOptions).subscribe(data => {
      this.response = {
        result: data['result'],
        message: data['message'],
        token: data['token'],
        data: data['data']
      }
      callback(this.response);
    }, error => {
      this.messageservice.warning("获取学校列表失败");
    }
    );
  }//-----------------------------------

  addinstitution(school_id: string,institution:string) {
    this.http.post<any>(this.serveurl + "/institution?username=" + this.username + "&school_id=" + school_id + "&institution=" + institution,null,this.httpOptions).subscribe((data:any) => {
      if (data.result != true) {
        this.messageservice.warning(data.message);
      }
      
    }, error => { this.messageservice.warning("添加学院失败") });
  }//----------------------------------------

  deleteinstitution(id: string) {
    this.http.delete<any>(this.serveurl + "/institution?username=" + this.username + "&id=" + id, this.httpOptions).subscribe((data: any) => {
      if (data.result != true) { this.messageservice.warning(data.message); }
      this.messageservice.success("删除学院成功");
    }, error => { this.messageservice.warning("删除学院失败") });
  }//-----------------------------------------


}
