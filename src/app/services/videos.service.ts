import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Category } from "../interfaces/category.interface";
import { video } from "../interfaces/video.interface";

@Injectable({
    providedIn: "root",
})
export class VideosService {
    url = environment.apiUrl;
    // categories: string[] = [];

    constructor(private http: HttpClient) {}

    addVideo(body: any): Observable<HttpResponse<any>> {
        return this.http.post<any>(this.url + "admin/videos", body);
    }

    getVideos(): Observable<any> {
        return this.http.get<any>(this.url + "videos");
    }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + 'categories');
  }

    getVideosByCategory(id: number): Observable<video[]> {
        return this.http.get<video[]>(this.url + "videos/category/" + id);
    }

    getVideosByCategories(ids: number[]): Observable<video[]> {
        return this.http.get<video[]>(
            this.url + "videosCatégorie/" + ids.join(",")
        );
    }
}
