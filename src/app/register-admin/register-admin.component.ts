import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss'],
})
export class RegisterAdminComponent implements OnInit {
  showPassword: boolean = false;
  errorMsg: String = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  registerAdminForm: FormGroup = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    this.errorMsg = '';
    this.authService
      .registerAdmin(this.registerAdminForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['email-confirmation', response.email]);
      });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
