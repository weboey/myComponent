import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'nz-demo-form-login',
  templateUrl: './nz-demo-form-login.component.html',
  styles: [ `
    .login-form {
      max-width: 300px;
    }
    .login-form-forgot {
      float: right;
    }
    .login-form-button {
      width: 100%;
    }
  `
  ]
})
export class NzDemoFormLoginComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
}

