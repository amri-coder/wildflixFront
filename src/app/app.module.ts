import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PagesModule} from "./pages/pages.module";
import { FavoriComponent } from '../services/favori/favori.component';
import { SocialComponent } from '../services/social/social.component';
import { UploadDownloadComponent } from '../services/upload-download/upload-download.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriComponent,
    SocialComponent,
    UploadDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
