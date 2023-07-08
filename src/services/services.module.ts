import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { HeadingComponent } from './heading/heading.component';
import { BodyAllUsersComponent } from './body-all-users/body-all-users.component';
import { BodyOnlyMembersComponent } from './body-only-members/body-only-members.component';
import { BodyTrialPeriodComponent } from './body-trial-period/body-trial-period.component';
import { FooterAllComponent } from './footer-all/footer-all.component';


@NgModule({
    declarations: [
        HeadingComponent,
        BodyAllUsersComponent,
        BodyOnlyMembersComponent,
        BodyTrialPeriodComponent,
        FooterAllComponent
    ],
  exports: [
    HeadingComponent,
    BodyOnlyMembersComponent,
    FooterAllComponent
  ],
    imports: [
        CommonModule,
        ServicesRoutingModule
    ]
})
export class ServicesModule { }
