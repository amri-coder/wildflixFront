import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  showPassword: boolean = false;
  errorMsg: String = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void { }

  registerForm: FormGroup = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    this.errorMsg = '';
    this.authService
      .register(this.registerForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['email-confirmation', response.email]);
      });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
