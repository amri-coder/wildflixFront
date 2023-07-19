import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-profil",
    templateUrl: "./profil.component.html",
    styleUrls: ["./profil.component.scss"],
})
export class ProfilComponent implements OnInit {
    email: string = "";
    firstname: string = "";
    lastname: string = "";
    role: string = "";
    isAdmin: boolean = false;
    password: string = "";
    verificationEmailCode: any;

    constructor(private authService: AuthService, private router: Router) {}
    ngOnInit(): void {
        this.authService.userMe().subscribe((response) => {
            this.email = response.email;
            this.firstname = response.firstname;
            this.lastname = response.lastname;
            this.password = response.password;
            this.verificationEmailCode = response.verificationEmailCode;

            this.role = response.roles[0].name;
            console.log("nav bar response: " + response.roles[0].name);
            if (this.role === "ADMIN") {
                this.isAdmin = true;
            }
        });
    }
}
