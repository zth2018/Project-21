import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Stream } from 'stream';
import { UserService } from '../../services/User.service';
import { concat } from 'rxjs';

interface User {
  username: string;
  password: string;
  phone: string;
}



@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  validateForm: FormGroup;
  user: any;
  checkph: boolean=false;
  
  constructor(private fb: FormBuilder,private http: UserService) { }




  ngOnInit() {
    this.validateForm = this.fb.group({
      phone: [null, [Validators.required, Validators.pattern(/^[1][3,4,5,7,8][0-9]{9}$/)]],
      password: [null, [Validators.required, Validators.pattern(/^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z]).*$/)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      username: [null,  [Validators.required, Validators.pattern(/[\u4E00-\u9FA5]/)]],       
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }

//, { updateOn: 'blur' }


  submitForm(): void {
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();  
    }
    this.user = this.validateForm.getRawValue();
    if (!this.validateForm.invalid&&this.checkph) {
      this.http.Register(this.user.username,this.user.password,this.user.phone);

    }
    
  }



  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }



  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };



  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  checkphone(phone: string) {
    this.http.checkphone(phone, (rt: any) => {
      this.checkph = rt;
    })
  }



}
