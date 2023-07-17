import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-reset-password",
    templateUrl: "./reset-password.component.html",
    styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
    showPassword: boolean = false;
    errorMsg: string = "";
    confirmMsg: string = "";
    token: string = "";
    submitted: boolean = false;
    resetPasswordForm: FormGroup = this.fb.group({
        password: ["", [Validators.required, Validators.min(5)]],
    });
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.token = params.get("token") + "";
        });
    }

    get f() {
        return this.resetPasswordForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        this.errorMsg = "";
        this.confirmMsg = "";
        this.authService
            .resetPassword({
                token: this.token,
                password: this.resetPasswordForm.controls["password"].value,
            })
            .subscribe(
                (response: any) => {
                    this.confirmMsg = response.message;

                    setTimeout(() => {
                        this.router.navigate(["login"]);
                    }, 3000); // Délai de 3 secondes (3000 millisecondes)
                },
                (error) => {
                    if (error.status == 404) {
                        this.errorMsg = "The user does not exist !";
                    } else if (error.status == 500) {
                        this.errorMsg = "The link is expired, try again !";
                    } else {
                        this.errorMsg = error.error.message;
                    }
                }
            );
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
}
