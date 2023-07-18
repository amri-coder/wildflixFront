import { Component, OnInit } from "@angular/core";
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
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
    isChecked: boolean = false;
    categories: Category[];
    videos: video[] = [];
    videosByCategory: video[] = [];

    videoUrl: string =
        "https://www.youtube.com/embed/mX_7du3t1GY?list=RDmX_7du3t1GY";

    safeVideoUrl: SafeResourceUrl;

    email: string = "";
    firstname: string = "";
    lastname: string = "";
    MsgSuppression: string = "";

    constructor(
        private fb: FormBuilder,
        private videoService: VideosService,
        private authService: AuthService,
        private router: Router,
        private domSanitizer: DomSanitizer
    ) {
        this.fetchCategories();
        this.allVideoForm = this.fb.group({
            categories: new FormArray([]),
        });
        this.safeVideoUrl = this.convertUrlToSafeRessource(this.videoUrl);
    }

    fetchCategories(): void {
        this.videoService.getCategories().subscribe(
            (categories) => {
                this.categories = categories;
                this.allVideoForm.patchValue({ categories: null });
            },
            (error) => {
                console.log(
                    "Erreur lors de la récupération des catégories :",
                    error
                );
            }
        );
    }

    allVideoForm: FormGroup = this.fb.group({
        title: ["", [Validators.required]],
        description: ["", [Validators.required]],
        url: ["", [Validators.required]],
        releaseDate: ["", [Validators.required]],
        categories: new FormArray([]),
        private: [false, [Validators.required]],
    });

    convertUrlToSafeRessource(url: string): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        console.log(url);
    }

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
                if (Array.isArray(response)) {
                    this.videos = [].concat(...response);
                } else {
                    this.videos.push(response);
                }
                // console.log("Videos :", this.videos);
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

    onCheckboxChange(event: any): void {
        const categories: FormArray = this.allVideoForm.get(
            "categories"
        ) as FormArray;

        if (event.target.checked) {
            categories.push(new FormControl(+event.target.value));
            console.log("Categories: " + categories.value);
        } else {
            const index = categories.controls.findIndex(
                (x) => x.value === +event.target.value
            );
            categories.removeAt(index);
        }
    }

    onFilterVideos(): void {
        const categories: number[] = this.allVideoForm.value.categories;

        if (categories.length > 0) {
            this.videoService
                .getVideosByCategories(categories)
                .subscribe((result: video[]) => {
                    console.log("result:", result);
                    this.videos = result;
                });
        }
    }

    // refreshPage() {
    //     window.location.reload(); // Actualise la page actuelle
    // }

    deleteVideo(id: any) {
        this.videoService.deleteVideo(id).subscribe((response) => {
            this.MsgSuppression = "Le video à été bien supprimer !";
            window.location.reload();
            //this.router.navigate(["/listing"]);
        });
    }
}
