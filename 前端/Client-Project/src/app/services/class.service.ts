import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";


interface T_class {
  id:string;
  classname: string;
  description: string;
  ownerphone: string;
  ownername: string;
  addtime: string;
  edittime: string;
  starttime: string;
  endtime: string;

}


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  serveurl: any = environment.ServeUrl;
  _class: T_class;

  

  constructor(private http: HttpClient) {
      
  }


  getCreatedclass(phone: string,rs) {
    this.http.get<any>(this.serveurl + "/class/getcclass?phone=" + phone, {
      responseType: "json"
    }).subscribe(data => {
      rs(data);
    });    
  }


  getJoinedclass(phone: string, rs) {
    this.http.get<any>(this.serveurl + "/class/getjclass?phone=" + phone, {
      responseType: "json"
    }).subscribe(data => {
      rs(data);
    });
  }

  createclass(t_class: T_class) {
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
      ownername: t_class.ownername,
      addtime: null,
      edittime: null,
      starttime: t_class.starttime,
      endtime: t_class.endtime
    }
    
    this.http.post<any>(this.serveurl + "/class/createclass", this._class, httpOptions).subscribe(data => { console.log(data) } );

  }

  updateclass(t_class: T_class) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.http.post<any>(this.serveurl + "/class/updateclass", t_class, httpOptions).subscribe(data => { console.log(data) });

  }




}
