import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from '../../../services/User.service';
import { environment } from '../../../../environments/environment';
import { JSDocCommentStmt } from '@angular/compiler';


export interface User {
  sId: number;
  sName: string;
  gender: string;

}

export interface User2 {
  
  username: string;
  password: string;

}

@Component({
  selector: 'app-mycreated',
  templateUrl: './mycreated.component.html',
  styleUrls: ['./mycreated.component.scss']
})
export class MycreatedComponent implements OnInit {
  
  constructor(private http: HttpClient, private User: UserService) {
   
  }
  
  user: User;
  user1: User;
  user2: User2;
  username: any;
  id: string;
  
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

    //下面这个可以

    //this.http.post<User>("http://192.168.1.141:8080/PostTest", httpOptions).subscribe((data: User) => this.user1 = {
    //  sId: data['sId'],
    //  sName: data['sName'],
    //  gender:data['gender']//返回一个object的读取办法
    //})

    //this.http.post<User>("http://192.168.1.141:8080/PostTest", {'sId':1,"sName":"suibian","gender":"nan"} ,httpOptions).subscribe((data: User) => this.user1 = {
    //  sId: data['sId'],
    //  sName: data['sName'],
    //  gender: data['gender']//返回一个object的读取办法
    //})

    //this.http.post<User>("http://192.168.1.141:8080/PostTest", { "sId": 1, "sName": "suibian", "gender": "nan" }, httpOptions).subscribe((data: User) => this.user1 = {
    //  sId: data['sId'],
    //  sName: data['sName'],
    //  gender: data['gender']//返回一个object的读取办法
    //})

    this.http.post<User2>("http://192.168.1.141:8080/PostTest", { "username": "nan", "password": "suibian"}, httpOptions).subscribe((data: User2) => this.user2 = {
      username: data['username'],
      password: data['password']
      //返回一个object的读取办法
    })

    //this.a=this.http.post<string>("http://192.168.1.141:8080/PostTest", "一串字符", httpOptions);
    //this.a = JSON.stringify(this.a);


    //this.http.post<string>("http://192.168.1.141:8080/PostTest", "一串字符", httpOptions).subscribe((data: string) => this.a = data['body']);

  }

 

Login() {
    //this.id = "567";
    //this.http.get<string>("http://192.168.1.141:8080/login?id="+this.id, {
    //  responseType: "json"
    //}).subscribe(json => {
    //  console.log("Response: " + json);
    //  this.username = json;
    //});
    this.username = this.User.getUsername();

  }
 

}


