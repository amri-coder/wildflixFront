import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    showPassword: boolean = false;
    errorMsg: String = "";

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}
    ngOnInit(): void {}

    loginForm: FormGroup = this.fb.group({
        email: ["", [Validators.required]],
        password: ["", [Validators.required]],
    });

    onSubmit() {
        this.errorMsg = "";
        this.authService.login(this.loginForm.value).subscribe(
            (reponse: any) => {
                this.authService.setJwt(reponse.jwt);
                this.authService.setEmail(reponse.user.email);
                this.authService.setRoles(reponse.user.roles[0].name);
                this.authService.setFirstname(reponse.user.firstname);
                this.authService.setLastname(reponse.user.lastname);
                this.router.navigate(["listing"]);
                // console.log("login role: " + reponse.user.roles[0].name);
            },
            (error) => {
                this.errorMsg = error.error.message;
            }
        );
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
}
