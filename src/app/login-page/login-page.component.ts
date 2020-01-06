import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [' ', Validators.required],
      password: [' ', Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    console.log('login()');
    this.email.setValue('');
    this.password.setValue('');
  }
}
