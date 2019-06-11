import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Class } from "../interface/class";
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  serveurl: any = environment.ServeUrl;
  _class: Class;
  httpOptions: any;
  

  constructor(private http: HttpClient, private router: Router,private message:NzMessageService) {
   this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
   

  }


  getCreatedclass(phone: string, rs) {
    //var token = localStorage.getItem("token");

    //var httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': token
    //  })
    //};
    //this.http.get<any>(this.serveurl + "/class/getcclass?phone=" + phone, {
    //  responseType: "json", headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': token
    //  })
    //});


    this.http.get<any>(this.serveurl + "/class/getcclass?phone=" + phone,this.httpOptions).subscribe(data => {
      rs(data);
    }, error => {
      this.processor(error, "没啥");

      });    
  }


  getJoinedclass(phone: string, rs) {
    this.http.get<any>(this.serveurl + "/class/getjclass?phone=" + phone, {
      responseType: "json"
    }).subscribe(data => {
      rs(data);
    });
  }

  createclass(t_class: Class) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this._class = {
      id: null,
      classname: t_class.classname,
      description: t_class.description,
      ownerphone: t_class.ownerphone,
      addtime: null,
      edittime: null,
      starttime: t_class.starttime,
      endtime: t_class.endtime
    }
    
    this.http.post<any>(this.serveurl + "/class/createclass", this._class, httpOptions).subscribe(data => { console.log(data) } );

  }

  updateclass(t_class: Class) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.http.post<any>(this.serveurl + "/class/updateclass", t_class, httpOptions).subscribe(data => { console.log(data) });
    
  }

  getclassmember(class_id:any) {
    //this.router.navigateByUrl("homepage/listpage");
    this.router.navigate(['/homepage/memlistforstudent', class_id]);
  }


  processor(error: any, msg: string) {
    if (error.status == 0) {
      setTimeout(() => {
        this.router.navigateByUrl("/login");
      }, 3000);
      this.message.warning("令牌已失效," + msg + ",请重新登陆");
    }
  }

}
