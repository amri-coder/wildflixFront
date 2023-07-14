import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    submitted: boolean = false;

    constructor(private fb: FormBuilder) {}

    contactForm: FormGroup = this.fb.group({
        name: ["", [Validators.required, Validators.min(3)]],
        email: ["", [Validators.required, Validators.email, Validators.min(4)]],
        message: ["", [Validators.required, Validators.min(4)]],
    });
    get f() {
        return this.contactForm.controls;
    }

    ngOnInit(): void {}

    onSubmit() {
        this.submitted = true;
    }
}
