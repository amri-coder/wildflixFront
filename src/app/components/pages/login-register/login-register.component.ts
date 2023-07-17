import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  showPassword: boolean = false;
  errorMsg: String = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  registerForm: FormGroup = this.fb.group({
    firstname: ['', [Validators.required, Validators.min(2)]],
    lastname: ['', [Validators.required, Validators.min(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  submitted: boolean = false;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });


  onSubmit() {
    this.errorMsg = '';
    this.submitted = true;
    this.authService.login(this.loginForm.value).subscribe(
      (reponse: any) => {
        this.authService.setJwt(reponse.jwt);
        this.authService.setEmail(reponse.email);
        this.authService.setRoles(reponse.roles);
        this.authService.setFirstname(reponse.firstname);
        this.authService.setLastname(reponse.lastname);
        this.router.navigate(['listing']);
      },
      (error) => {
        this.errorMsg = error.error.message;
      }
    );
  }

  onRegister() {
    this.errorMsg = '';
    this.authService
      .register(this.registerForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['email-confirmation', response.email]);
      }, (error) => {
        this.errorMsg = error.error.message;
      }
      );

  }


  refreshPage() {
    window.location.reload(); // Actualise la page actuelle
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
