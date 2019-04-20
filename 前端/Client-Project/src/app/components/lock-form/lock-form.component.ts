import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lock-form',
  templateUrl: './lock-form.component.html',
  styleUrls: ['./lock-form.component.scss']
})
export class LockFormComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit():void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

}
