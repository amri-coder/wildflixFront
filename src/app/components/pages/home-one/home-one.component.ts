import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "app-home-one",
    templateUrl: "./home-one.component.html",
    styleUrls: ["./home-one.component.scss"],
})
export class HomeOneComponent implements OnInit {
    //addVideo: any = {};
    // body: any;
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {}

    addToFavorites(idVideo: any) {
        // this.authService.addVideoToFavorite(this).subscribe(
        //     (response) => {
        //         console.log(response);
        //         this.addVideo = response.message;
        //     },
        //     (error) => {
        //         console.log("message d'erreur 1 " + error.error.message);
        //         console.log("message d'erreur 2 " + error.error);
        //         console.log("message d'erreur 3 " + error);
        //         this.addVideo = error.error.message;
        //     }
        // );
    }
}
