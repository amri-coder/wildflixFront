import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { ResetPasswordRequestComponent } from "./pages/reset-password-request/reset-password-request.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { EmailConfirmationComponent } from "./pages/email-confirmation/email-confirmation.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RegisterAdminComponent } from "./register-admin/register-admin.component";
import { JwtInterceptor } from "./core/interceptors/jwt.interceptor";
import { NgModule } from "@angular/core";

import { PreloaderComponent } from "./components/common/preloader/preloader.component";
import { HomeOneComponent } from "./components/pages/home-one/home-one.component";
import { HomeTwoComponent } from "./components/pages/home-two/home-two.component";
import { HomeThreeComponent } from "./components/pages/home-three/home-three.component";
import { NavbarStyleOneComponent } from "./components/common/navbar-style-one/navbar-style-one.component";
import { NavbarStyleTwoComponent } from "./components/common/navbar-style-two/navbar-style-two.component";
import { FooterStyleOneComponent } from "./components/common/footer-style-one/footer-style-one.component";
import { FooterStyleTwoComponent } from "./components/common/footer-style-two/footer-style-two.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { TeamComponent } from "./components/pages/team/team.component";
import { PricingComponent } from "./components/pages/pricing/pricing.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { TestimonialsComponent } from "./components/pages/testimonials/testimonials.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { LoginRegisterComponent } from "./components/pages/login-register/login-register.component";
import { TermsConditionComponent } from "./components/pages/terms-condition/terms-condition.component";
import { PrivacyPolicyComponent } from "./components/pages/privacy-policy/privacy-policy.component";
import { ComingSoonComponent } from "./components/pages/coming-soon/coming-soon.component";
import { ShopComponent } from "./components/pages/shop/shop.component";
import { CartComponent } from "./components/pages/cart/cart.component";
import { CheckoutComponent } from "./components/pages/checkout/checkout.component";
import { ProductsDetailsComponent } from "./components/pages/products-details/products-details.component";
import { ListingComponent } from "./components/pages/listing/listing.component";
import { ListingDetailsComponent } from "./components/pages/listing-details/listing-details.component";
import { BlogComponent } from "./components/pages/blog/blog.component";
import { BlogDetailsComponent } from "./components/pages/blog-details/blog-details.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { CookieComponent } from './cookie/cookie.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { AllVideosComponent } from './pages/all-videos/all-videos.component';
import { CategoryComponent } from "./pages/category/category.component";

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        ResetPasswordRequestComponent,
        ResetPasswordComponent,
        EmailConfirmationComponent,
        RegisterAdminComponent,
        PreloaderComponent,
        HomeOneComponent,
        HomeTwoComponent,
        HomeThreeComponent,
        NavbarStyleOneComponent,
        NavbarStyleTwoComponent,
        FooterStyleOneComponent,
        FooterStyleTwoComponent,
        AboutComponent,
        TeamComponent,
        PricingComponent,
        CategoryComponent,
        FaqComponent,
        TestimonialsComponent,
        ErrorComponent,
        LoginRegisterComponent,
        TermsConditionComponent,
        PrivacyPolicyComponent,
        ComingSoonComponent,
        ShopComponent,
        CartComponent,
        CheckoutComponent,
        ProductsDetailsComponent,
        ListingComponent,
        ListingDetailsComponent,
        BlogComponent,
        BlogDetailsComponent,
        ContactComponent,
        CookieComponent,
        VideosComponent,
        AllVideosComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        FontAwesomeModule,
        NgSelectModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
