import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { video } from 'src/app/interfaces/video.interface';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.scss']
})
export class AllVideosComponent implements OnInit {
  errorMsg: String = '';
  categories: Category[];
  videos: video[] = [];

  constructor(
    private vidéoService: VideosService
  ) { }

  ngOnInit(): void {
    this.getAllVideos();
    //console.log(this.getAllVideos());
  }

  getAllVideos(): void {
    this.vidéoService.getVideos().subscribe(
      response => {
        if (Array.isArray(response)) {
          this.videos = [].concat(...response);
        } else {
          this.videos.push(response);
        }
        // console.log("Videos :", this.videos);
      },
      error => {
        console.log('Erreur lors de la récupération des vidéos :', error);
      }
    );
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
