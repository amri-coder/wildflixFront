import { Component, OnInit } from "@angular/core";
import { VideosService } from "./../../../services/videos.service";
import { UserService } from "src/app/services/user.service";
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
  isFavorite: boolean = false;
  videoId: number;
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
    private domSanitizer: DomSanitizer,
    private userService: UserService
  ) {
    // this.fetchCategories();
    // this.allVideoForm = this.fb.group({
    //     categories: new FormArray([]),
    // });
    this.safeVideoUrl = this.convertUrlToSafeRessource(this.videoUrl);
  }

  // fetchCategories(): void {
  //     this.videoService.getCategories().subscribe(
  //         (categories) => {
  //             this.categories = categories;
  //             this.allVideoForm.patchValue({ categories: null });
  //         },
  //         (error) => {
  //             console.log(
  //                 "Erreur lors de la récupération des catégories :",
  //                 error
  //             );
  //         }
  //     );
  // }

  // allVideoForm: FormGroup = this.fb.group({
  //     title: ["", [Validators.required]],
  //     description: ["", [Validators.required]],
  //     url: ["", [Validators.required]],
  //     releaseDate: ["", [Validators.required]],
  //     categories: new FormArray([]),
  //     private: [false, [Validators.required]],
  // });

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
          console.log("this.videos " + this.videos);
        } else {
          this.videos.push(response);
        }
        // console.log("cocuc" + JSON.stringify(response));
        // this.videos = response.videos;
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

  // Onclick() {
  //     this.authService.logout();
  //     this.router.navigate([""]);
  // }
  // goToLoginRegister() {
  //     this.router.navigate(["/login-register"]);
  // }

  // onCheckboxChange(event: any): void {
  //     const categories: FormArray = this.allVideoForm.get(
  //         "categories"
  //     ) as FormArray;

  //     if (event.target.checked) {
  //         categories.push(new FormControl(+event.target.value));
  //         console.log("Categories: " + categories.value);
  //     } else {
  //         const index = categories.controls.findIndex(
  //             (x) => x.value === +event.target.value
  //         );
  //         categories.removeAt(index);
  //     }
  // }

  // onFilterVideos(): void {
  //     const categories: number[] = this.allVideoForm.value.categories;

  //     if (categories.length > 0) {
  //         this.videoService
  //             .getVideosByCategories(categories)
  //             .subscribe((result: video[]) => {
  //                 console.log("result:", result);
  //                 this.videos = result;
  //             });
  //     }
  // }


  addToFavorites(videoId: number): void {
    this.userService.addToFavorites(videoId).subscribe(
      (response) => {
        // Gérer la logique après l'ajout aux favoris
        console.log(JSON.stringify(response))
        alert('Film ajouté aux favoris');
        this.isFavorite = true;
      },
      (error) => {
        // Gérer les erreurs éventuelles
        alert('Erreur lors de l\'ajout aux favoris');
      }
    );
  }

  removeFromFavorites(videoId: number): void {
    this.userService.removeFromFavorites(videoId).subscribe(
      (response) => {
        // Gérer la logique après la suppression des favoris
        console.log(JSON.stringify(response))
        alert('Film supprimé des favoris');
        this.isFavorite = false;

      },
      (error) => {
        // Gérer les erreurs éventuelles
        alert('Erreur lors de la suppression des favoris');
      }
    );
  }


  toggleFavorite(videoId: number): void {
    if (this.isFavorite) {
      this.removeFromFavorites(videoId);
    } else {
      this.addToFavorites(videoId);
    }
  }

}