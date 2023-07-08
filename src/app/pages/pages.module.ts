import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { VideosAllUsersComponent } from './videos-all-users/videos-all-users.component';
import { VideosOnlyMembersComponent } from './videos-only-members/videos-only-members.component';
import { VideosTrialPeriodComponent } from './videos-trial-period/videos-trial-period.component';
import {ServicesModule} from "../../services/services.module";
import {OtherPagesModule} from "../other-pages/other-pages.module";


@NgModule({
  declarations: [
    VideosAllUsersComponent,
    VideosOnlyMembersComponent,
    VideosTrialPeriodComponent
  ],
  exports: [
    VideosAllUsersComponent,
    VideosOnlyMembersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ServicesModule,
    OtherPagesModule
  ]
})
export class PagesModule { }
