import { Component, OnInit } from "@angular/core";
import { VideosService } from "./../../../services/videos.service";
import { Category } from "src/app/interfaces/category.interface";
import { video } from "src/app/interfaces/video.interface";
import { AuthService } from "src/app/services/auth.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-listing",
    templateUrl: "./listing.component.html",
    styleUrls: ["./listing.component.scss"],
})
export class ListingComponent implements OnInit {
    errorMsg: String = "";
    isChecked: boolean = false;
    categories: Category[];
    videos: video[] = [];
    videosByCategory: video[] = [];

    videoUrl: string = "";

    safeVideoUrl: SafeResourceUrl;

    email: string = "";
    firstname: string = "";
    lastname: string = "";

    constructor(
        private fb: FormBuilder,
        private videoService: VideosService,
        private authService: AuthService,
        private router: Router,
        private domSanitizer: DomSanitizer
    ) {
        this.safeVideoUrl = this.convertUrlToSafeRessource(this.videoUrl);
    }

    convertUrlToSafeRessource(url: string): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }

    ngOnInit(): void {
        this.getAllVideos();

        this.authService.userMe().subscribe((response) => {
            this.email = response.email;
            this.firstname = response.firstname;
            this.lastname = response.lastname;
        });
    }

    getAllVideos(): void {
        this.videoService.getVideos().subscribe(
            (response) => {
                if (Array.isArray(response)) {
                    this.videos = [].concat(...response);
                    console.log("this.videos " + this.videos);
                } else {
                    this.videos.push(response);
                }
            },
            (error) => {
                console.log(
                    "Erreur lors de la récupération des vidéos :",
                    error
                );
            }
        );
    }
}
