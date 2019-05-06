import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



var phone = /^[1][3,4,5,7,8][0-9]{9}$/;

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  validateForm: FormGroup;
 


  constructor(private fb: FormBuilder) { }




  ngOnInit() {
    this.validateForm = this.fb.group({
      phone: [null, [Validators.required, Validators.pattern(/^[1][3,4,5,7,8][0-9]{9}$/)]],
      password: [null, [Validators.required, Validators.pattern(/^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z]).*$/)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],       
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }




  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
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
}
