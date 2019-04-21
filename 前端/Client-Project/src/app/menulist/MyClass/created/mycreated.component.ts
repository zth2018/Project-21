import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


export interface User {
  sId: number;
  sName: string;
  gender: string;

}



@Component({
  selector: 'app-mycreated',
  templateUrl: './mycreated.component.html',
  styleUrls: ['./mycreated.component.scss']
})
export class MycreatedComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  user: User;
  user1: User;
  username: any;
  id: string;
  user2 = '[{"sId":1,"sName":"刘备","gender":"男"}]';
  a: any;

  ngOnInit() {
   
    this.http.get<User>("http://192.168.1.141:8080/test3", {
      responseType: "json"
    }).subscribe(json => {
      console.log("Response: " + json);
      this.user = json;
    });
    //this.user1 = {
    //  sId:1,
    //  sName: "ss",
    //  gender:"aa"
    //}
    //this.user1 = [{
    //  "sId": 1,
    //  "sName": "ss",
    //  "gender": "aa"
    //}]
  }


  PostTest() {

    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
       
      })
    };

    

    //this.http.post<User>("http://192.168.1.141:8080/PostTest","一串字符", httpOptions).subscribe((data: User) => this.user1 = {
    //  sId: data['sId'],
    //  sName: data['sName'],
    //  gender:data['gender']//返回一个object的读取办法
    //})
   
    //this.a=this.http.post<string>("http://192.168.1.141:8080/PostTest", "一串字符", httpOptions);
    //this.a = JSON.stringify(this.a);
    this.http.post<string>("http://192.168.1.141:8080/PostTest", "一串字符", httpOptions).subscribe((data: string) => this.a = data['body']);

  }

 

Login() {
    this.id = "567";
    this.http.get<string>("http://192.168.1.141:8080/login?id="+this.id, {
      responseType: "json"
    }).subscribe(json => {
      console.log("Response: " + json);
      this.username = json;
    });


  }
 

}
