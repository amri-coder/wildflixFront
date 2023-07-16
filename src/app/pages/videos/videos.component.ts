import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { video } from 'src/app/interfaces/video.interface';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  errorMsg: String = '';
  categories: Category[];
  videos: video[] = [];

  constructor(
    private fb: FormBuilder,
    private vidéoService: VideosService,
    private router: Router
  ) {
    this.fetchCategories();
    this.videoForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      url: ['', [Validators.required]],
      release_date: ['', [Validators.required]],
      categories: new FormArray([]),
      private: new FormControl('', Validators.required),
    });
  }

  fetchCategories(): void {
    this.vidéoService.getCategories().subscribe(
      categories => {
        this.categories = categories;
        this.videoForm.patchValue({ categories: null });
      },
      error => {
        console.log('Erreur lors de la récupération des catégories :', error);
      }
    );
  }

  videoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    url: ['', [Validators.required]],
    release_date: ['', [Validators.required]],
    categories: new FormArray([]),
    private: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    this.errorMsg = '';
    let objectList = this.videoForm.value.categories.map(id => ({ id }));
    this.videoForm.value.categories = objectList;
    //console.log(this.videoForm.value);
    this.vidéoService
      .addVideo(this.videoForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['allVideos']);
      });
  }

  onCheckboxChange(event: any) {

    const categories: FormArray = (this.videoForm.controls['categories'] as FormArray);
    if (event.target.checked) {

      categories.push(new FormControl(event.target.value));

    } else {

      const index = categories.controls
        .findIndex(x => x.value === event.target.value);

      categories.removeAt(index);
    }
  }

}
