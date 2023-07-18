import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";


@Component({
    selector: "app-navbar-style-one",
    templateUrl: "./navbar-style-one.component.html",
    styleUrls: ["./navbar-style-one.component.scss"],
})
export class NavbarStyleOneComponent implements OnInit {
    email: string = "";
    firstname: string = "";
    lastname: string = "";
    role: string = "";
    isAdmin: boolean = false;
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.authService.userMe().subscribe((response) => {
            this.email = response.email;
            this.firstname = response.firstname;
            this.lastname = response.lastname;
            this.role = response.roles[0].name;
            console.log("nav bar response: " + response.roles[0].name);
            if (this.role === "ADMIN") {
                this.isAdmin = true;
            }
        });


    }

    Onclick() {
        this.authService.logout();
        this.router.navigate([""]);
    }
    goToLoginRegister() {
        this.router.navigate(["/login-register"]);
    }
}
