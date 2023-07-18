import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl;
  // categories: string[] = [];

  constructor(private http : HttpClient) { }

  addToFavorites(videoId: number): Observable<any> {
    return this.http.post<any>(`${this.url}users/addVideoToFavorite`, {
      idVideo: videoId
    });
  } 


  removeFromFavorites(videoId: number): Observable<any> {
    return this.http.delete<any>(`${this.url}users/removeVideoFromFavorite`);
  }

}
