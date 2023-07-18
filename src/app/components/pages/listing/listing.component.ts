import { Component, OnInit } from "@angular/core";
import { VideosService } from "./../../../services/videos.service";
import { Category } from "src/app/interfaces/category.interface";
import { video } from "src/app/interfaces/video.interface";
import { AuthService } from "src/app/services/auth.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
    selector: "app-listing",
    templateUrl: "./listing.component.html",
    styleUrls: ["./listing.component.scss"],
})
export class ListingComponent implements OnInit {
    email: string = "";
    firstname: string = "";
    lastname: string = "";
    videos: video[] = [];
    categories: Category[];
    url: SafeResourceUrl;
    videoUrl: string = "";
    constructor(
        private authService: AuthService,
        private videoService: VideosService,
        private sanitizer: DomSanitizer
    ) {
        this.url = this.convertToEmbedLink(this.videoUrl);
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
                // if (Array.isArray(response)) {
                //     this.videos = [].concat(...response);
                // } else {
                //     this.videos.push(response);
                // }
                // console.log("Videos :", this.videos);
                this.videos = response.videos;
                console.log(this.videos);
                console.log(response);
            },
            (error) => {
                console.log(
                    "Erreur lors de la récupération des vidéos :",
                    error
                );
            }
        );
    }

    convertToEmbedLink(url: string): SafeResourceUrl {
        // const videoId = this.extractVideoId(url);
        // if (videoId) {
        //     const sanitizedUrl = `https://www.youtube.com/embed/${videoId}`;
        //     return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedUrl);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        // }
        // return "";
    }

    extractVideoId(url: string): string | null {
        const regex = /[?&]v=([^&#]*)/;
        const match = url.match(regex);
        if (match) {
            return match[1];
        }
        return null;
    }
}
