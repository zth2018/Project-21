import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/User.service';
import {  Router } from '@angular/router';
import {Response} from '../../interface/response'





@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  howlogin:number=0;
  response: Response;
  user: any;
  //a: boolean=false;
  //msg: string;
  //remember: string;
  validateForm: FormGroup;


  constructor(private fb: FormBuilder, private http: UserService,private router:Router) { }



  ngOnInit(): void {
    //this.howlogin = localStorage.getItem("howlogin");
    //this.remember = localStorage.getItem("remember");
    this.validateForm = this.fb.group({
      account: [localStorage.getItem("account"), [Validators.required]],
      password: [localStorage.getItem("remember"), [Validators.required]],
      remember: [false]
    })
  }//---------------------------------------------------------------------------------------------

      

  submitForm(): void {
    //console.log(this.howlogin);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity(); 
    }
      this.user = this.validateForm.getRawValue();
         
        this.http.Login(this.user.account, this.user.password, this.user.remember,this.howlogin);
    
    
   
  }//----------------------------------------------------------------------------------------------



}
