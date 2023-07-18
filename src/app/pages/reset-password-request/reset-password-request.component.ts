import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "app-reset-password-request",
    templateUrl: "./reset-password-request.component.html",
    styleUrls: ["./reset-password-request.component.scss"],
})
export class ResetPasswordRequestComponent implements OnInit {
    errorMsg: string = "";
    confirmMsg: string = "";
    submitted: boolean = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}
    ngOnInit(): void {}

    resetPasswordRequestForm: FormGroup = this.fb.group({
        email: ["", [Validators.required, Validators.email, Validators.min(5)]],
    });

    get f() {
        return this.resetPasswordRequestForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        this.confirmMsg = "";
        this.errorMsg = "";
        this.authService
            .resetPasswordRequest(this.resetPasswordRequestForm.value)
            .subscribe(
                (response: any) => {
                    this.confirmMsg =
                        response.message +
                        ", you will be redirected to the homepage";
                    setTimeout(() => {
                        this.router.navigate(["home"]);
                    }, 5000); // Délai de 5 secondes (5000 millisecondes)
                },
                (error) => {
                    if (error.status == 404) {
                        this.errorMsg = "The user does not exist !";
                    } else if (error.status == 500) {
                        this.errorMsg = "Error server, try again !";
                    } else {
                        this.errorMsg = error.error.message;
                    }
                }
            );
    }
}
