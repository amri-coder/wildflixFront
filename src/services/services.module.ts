import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { HeadingComponent } from './heading/heading.component';
import { BodyAllUsersComponent } from './body/body-all-users/body-all-users.component';
import { BodyOnlyMembersComponent } from './body/body-only-members/body-only-members.component';
import { BodyTrialPeriodComponent } from './body/body-trial-period/body-trial-period.component';
import { FooterAllComponent } from './footer-all/footer-all.component';
import { DetailsOnlyMembersComponent } from './details/details-only-members/details-only-members.component';
import { DetailsAllUsersComponent } from './details/details-all-users/details-all-users.component';
import { DetailsTrialPeriodComponent } from './details/details-trial-period/details-trial-period.component';


@NgModule({
    declarations: [
        HeadingComponent,
        BodyAllUsersComponent,
        BodyOnlyMembersComponent,
        BodyTrialPeriodComponent,
        FooterAllComponent,
        DetailsOnlyMembersComponent,
        DetailsAllUsersComponent,
        DetailsTrialPeriodComponent
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
