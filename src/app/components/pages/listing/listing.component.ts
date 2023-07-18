import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {


  videoId: number;

  email: string = '';
  firstname: string = '';
  lastname: string = '';
  isFavorite: boolean = false;

  constructor(private authService: AuthService, private videosService : VideosService) { }

  ngOnInit(): void {
    this.authService.userMe().subscribe((response) => {
      this.email = response.email;
      this.firstname = response.firstname;
      this.lastname = response.lastname;
    });
  }


  addToFavorites(videoId: number): void {
    // Appel au backend pour ajouter le film à la liste des favoris
  }
  
  removeFromFavorites(videoId: number): void {
    // Appel au backend pour supprimer le film de la liste des favoris
  }
  

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.removeFromFavorites(this.videoId);
    } else {
      this.addToFavorites(this.videoId);
    }
  }

}
