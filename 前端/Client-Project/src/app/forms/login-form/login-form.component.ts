import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/User.service';
import {  Router } from '@angular/router';



export interface login {
  result: boolean;
  taken: string;
  msg: string;
  username: string;
  phone: string;
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: any;
  a: boolean=false;
  msg: string;

  validateForm: FormGroup;


  constructor(private fb: FormBuilder, private http: UserService,private router:Router) { }



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
    this.http.Login(this.user.userName, this.user.password, (rs: login) => {
      this.a = !rs.result;
      if (rs.result) {
        this.router.navigateByUrl("homepage");
      }
      else {
        this.msg = rs.msg;
      }
    });
   
  }



}
