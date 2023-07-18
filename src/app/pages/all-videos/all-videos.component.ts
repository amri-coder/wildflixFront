import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "src/app/interfaces/category.interface";
import { video } from "src/app/interfaces/video.interface";
import { AuthService } from "src/app/services/auth.service";
import { VideosService } from "src/app/services/videos.service";

@Component({
    selector: "app-all-videos",
    templateUrl: "./all-videos.component.html",
    styleUrls: ["./all-videos.component.scss"],
})
export class AllVideosComponent implements OnInit {
    errorMsg: String = "";
    categories: Category[];
    videos: any[] = [];

    email: string = "";
    firstname: string = "";
    lastname: string = "";

    constructor(
        private videoService: VideosService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getAllVideos();
        //console.log(this.getAllVideos());

        this.authService.userMe().subscribe((response) => {
            this.email = response.email;
            this.firstname = response.firstname;
            this.lastname = response.lastname;
        });
    }

    getAllVideos(): void {
        this.videoService.getVideos().subscribe(
            (response) => {
                // if (Array.isArray(response)) {
                //     this.videos = [].concat(...response);
                // } else {
                //     this.videos.push(response);
                // }
                // // console.log("Videos :", this.videos);
                console.log(response);
                console.log(response[0]);
                console.log(response.video);
                console.log(this.videos);
                this.videos = response;
                console.log(this.videos);
            },
            (error) => {
                console.log(
                    "Erreur lors de la récupération des vidéos :",
                    error
                );
            }
        );
    }

    Onclick() {
        this.authService.logout();
        this.router.navigate([""]);
    }
    goToLoginRegister() {
        this.router.navigate(["/login-register"]);
    }

    // getAllVideos(): void {
    //   this.vidéoService.getVideos().subscribe(
    //     videos => {
    //       this.videos.push(videos);
    //       console.log("Videos :", this.videos);
    //     },
    //     error => {
    //       console.log('Erreur lors de la récupération des vidéos :', error);
    //     }
    //   );
    // }
}
