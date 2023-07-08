import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPagesRoutingModule } from './other-pages-routing.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    OtherPagesRoutingModule
  ]
})
export class OtherPagesModule { }
