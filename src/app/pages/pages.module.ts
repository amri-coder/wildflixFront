import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { VideosAllUsersComponent } from './videos-all-users/videos-all-users.component';
import { VideosOnlyMembersComponent } from './videos-only-members/videos-only-members.component';
import { VideosTrialPeriodComponent } from './videos-trial-period/videos-trial-period.component';


@NgModule({
  declarations: [
    VideosAllUsersComponent,
    VideosOnlyMembersComponent,
    VideosTrialPeriodComponent
  ],
  exports: [
    VideosAllUsersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
