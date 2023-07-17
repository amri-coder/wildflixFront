import { AuthService } from "src/app/services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    confirmMsg: string = "";
    errorMsg: string = "";

    submitted: boolean = false;

    name: string = "";
    email: string = "";
    phone: string = "";
    subject: string = "";
    message: string = "";

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    contactForm: FormGroup = this.fb.group({
        name: ["", [Validators.required, Validators.min(3)]],
        email: ["", [Validators.required, Validators.email, Validators.min(4)]],
        phone: [""],
        subject: [""],
        message: ["", [Validators.required, Validators.min(4)]],
    });
    get f() {
        return this.contactForm.controls;
    }

    ngOnInit(): void {}

    onSubmit() {
        this.submitted = true;
        this.confirmMsg = "";
        this.errorMsg = "";
        this.authService.sendContactForm(this.contactForm.value).subscribe(
            (response) => {
                this.confirmMsg = response.message;
            },
            (error) => {
                this.errorMsg = error.error.message;
            }
        );
    }
}
