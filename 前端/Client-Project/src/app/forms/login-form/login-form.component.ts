import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/User.service';
import {  RouterModule } from '@angular/router';
import { concat } from 'rxjs';


export interface login {
  result: boolean;
  taken: string;
  msg: string;
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: any;
  loginres: login;


  validateForm: FormGroup;


  constructor(private fb: FormBuilder, private http: UserService) { }



  ngOnInit():void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    })
  }

      

  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity(); 
    }

    this.user = this.validateForm.getRawValue();
    this.loginres=this.http.Login(this.user.userName, this.user.password);
    //console.log(this.loginres.msg);
  }



}
