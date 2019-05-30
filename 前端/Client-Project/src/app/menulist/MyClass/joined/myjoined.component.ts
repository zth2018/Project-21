import { Component, OnInit, ErrorHandler } from '@angular/core';
import { UserService } from '../../../services/User.service';
import { ClassService } from '../../../services/class.service';
import { Class } from '../../../interface/class';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { collapseMotion } from 'ng-zorro-antd/core/animation/collapse';
import { error } from '@angular/compiler/src/util';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Response } from 'selenium-webdriver/http';



interface T_class {
  id: string;
  classname: string;
  description: string;
  ownerphone: string;
  ownername: string;
  addtime: string;
  edittime: string;
  starttime: string;
  endtime: string;

}


@Component({
  selector: 'app-myjoined',
  templateUrl: './myjoined.component.html',
  styleUrls: ['./myjoined.component.scss']
})
export class MyjoinedComponent implements OnInit {
  token: string;
  //_class: Class;
  //userphone: string;
  //class_list: any;
  constructor(private User: UserService, private T_class: ClassService, private http: HttpClient, private error1: ErrorHandler) { }

  ngOnInit() {
    this.token = localStorage.getItem("token");
    //this.userphone = this.User.GetUserphone();
    //this.T_class.getJoinedclass(this.userphone, (rs: any) => {
    //  this.class_list = rs;
    //});

  }

  test() {
   
    this.User.test();

    ////token = JSON.parse(token);
    ////console.log(token);
    ////token = JSON.stringify(token);
    ////console.log(token);
    //var httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': this.token
    //  })
    //};
    //this.http.get<any>("http://localhost:8080/test/3").subscribe(data => { }, error => {
    //  console.log(error);
      
    //});

    
    //        //this.http.get<any>("http://localhost:8080/test/3").subscribe(data => {
 
    //        //});
          
    }


  testerror(): Observable<any> {
    console.log("test0");
    return this.http.get<any>("http://localhost:8080/test/3")
      .pipe(
      
      catchError(this.handleError<any>(`test`)));
      

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("test1")
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log(error.status);
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  //private handleError<T>(operation = 'operation', result?: T) {
  //  return (error: any): Observable<T> => {

  //    // TODO: send the error to remote logging infrastructure
  //    console.error(error); // log to console instead

  //    // TODO: better job of transforming error for user consumption
  //    this.log(`${operation} failed: ${error.message}`);

  //    // Let the app keep running by returning an empty result.
  //    return of(result as T);
  //  };
  //}




}
