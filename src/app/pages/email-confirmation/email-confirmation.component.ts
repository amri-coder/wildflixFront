import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: "app-email-confirmation",
    templateUrl: "./email-confirmation.component.html",
    styleUrls: ["./email-confirmation.component.scss"],
})
export class EmailConfirmationComponent implements OnInit {
    emailConfirmForm: FormGroup = this.fb.group({
        code: ["", [Validators.required]],
    });

    errorMsg: string = "";
    confirmMsg: string = "";
    email: string = "";

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.email = params.get("email") + "";
        });
    }

    onSubmit() {
        this.confirmMsg = "";
        this.errorMsg = "";
        this.authService
            .verifyEmail(this.emailConfirmForm.value, this.email)
            .subscribe(
                (response: any) => {
                    this.confirmMsg = response.message;
                    // this.router.navigate(['login']);

                    setTimeout(() => {
                        this.router.navigate(["login"]);
                    }, 3000); // Délai de 3 secondes (3000 millisecondes)
                },
                (error) => {
                    this.errorMsg = error.error.message;
                }
            );
    }
}
