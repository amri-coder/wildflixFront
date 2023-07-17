import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
    showPassword: boolean = false;
    errorMsg: String = "";
    submitted: boolean = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}
    ngOnInit(): void {}

    registerForm: FormGroup = this.fb.group({
        firstname: ["", [Validators.required, Validators.min(2)]],
        lastname: ["", [Validators.required, Validators.min(2)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.min(3)]],
    });

    get f() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        this.errorMsg = "";
        this.authService
            .register(this.registerForm.value)
            .subscribe((response: any) => {
                this.router.navigate(["email-confirmation", response.email]);
            },
            (error) => {
                this.errorMsg = error.error.message;
            });
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
}
