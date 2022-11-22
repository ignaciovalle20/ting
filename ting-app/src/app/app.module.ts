import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angular2-qrcode';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login/login-page.component';
import { LoginPageBtnComponent } from './components/login/login-page-btn/login-page-btn.component';
import { LoginPageInputComponent } from './components/login/login-page-input/login-page-input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieFinderComponent } from './components/movie-finder/movie-finder.component';
import { MovieFinderMovieSelectorComponent } from './components/movie-finder/movie-finder-movie-selector/movie-finder-movie-selector.component';
import { MovieFinderTheaterSelectorComponent } from './components/movie-finder/movie-finder-theater-selector/movie-finder-theater-selector.component';
import { MovieFinderDateSelectorComponent } from './components/movie-finder/movie-finder-date-selector/movie-finder-date-selector.component';
import { SeatsComponent } from './components/seats/seats.component';
import { SeatsGridComponent } from './components/seats/seats-grid/seats-grid.component';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { ExtrasComponent } from './components/extras/extras.component';
import { ExtrasListComponent } from './components/extras/extras-list/extras-list.component';
import { ExtrasItemComponent } from './components/extras/extras-item/extras-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home/home-page.component';
import { SectionHeadingComponent } from './components/home/section-heading/section-heading.component';
import { PostCarouselComponent } from './components/home/post-carousel/post-carousel.component';
import { MovieImgComponent } from './components/home/post-img/post-img.component';
import { InfoPostComponent } from './components/home/info-post/info-post.component';
import { ProcessingPaymentComponent } from './components/processing-payment/processing-payment.component';
import { HomeBuyBtnComponent } from './components/home/home-buy-btn/home-buy-btn.component';
import { MovieSchedComponent } from './components/movie-scheduler/movie-scheduler.component';
import { MovieFinderNextComponent } from './components/movie-finder/movie-finder-next/movie-finder-btn-next.component';
import { SeatsBtnNextComponent } from './components/seats/seats-btn-next/seats-btn-next.component';
import { ExtrasNextComponent } from './components/extras/extras-next/extras-next.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SeatComponent } from './components/seats/seat/seat.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { SummaryBtnNextComponent } from './components/summary/summary-btn-next/summary-btn-next.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchasesBtnReturnComponent } from './components/purchases/purchases-btn-return/purchases-btn-return.component';
import { PurchasesListComponent } from './components/purchases/purchases-list/purchases-list.component';
import { PurchasesItemComponent } from './components/purchases/purchases-item/purchases-item.component';
import { QrcodeBtnComponent } from './components/qrcode/qrcode-btn/qrcode-btn.component';
import { QrcodeBtnPInvoiceComponent } from './components/qrcode/qrcode-btn-p-invoice/qrcode-btn-p-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginPageBtnComponent,
    LoginPageInputComponent,
    MovieFinderComponent,
    MovieFinderMovieSelectorComponent,
    MovieFinderTheaterSelectorComponent,
    MovieFinderDateSelectorComponent,
    SeatsComponent,
    SeatsGridComponent,
    MovieFinderNextComponent,
    MovieSchedComponent,
    ExtrasComponent,
    ExtrasListComponent,
    ExtrasItemComponent,
    SectionHeadingComponent,
    HomePageComponent,
    FooterComponent,
    PostCarouselComponent,
    MovieImgComponent,
    InfoPostComponent,
    ProcessingPaymentComponent,
    HomeBuyBtnComponent,
    SeatsBtnNextComponent,
    ExtrasNextComponent,
    SummaryComponent,
    SeatComponent,
    QrcodeComponent,
    SummaryBtnNextComponent,
    NavbarComponent,
    PurchasesComponent,
    PurchasesBtnReturnComponent,
    PurchasesListComponent,
    PurchasesItemComponent,
    QrcodeBtnComponent,
    QrcodeBtnPInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    QRCodeModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
    }), 
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
