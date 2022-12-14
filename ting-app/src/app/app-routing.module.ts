import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { LoginPageComponent } from './components/login/login-page.component';
import { MovieFinderComponent } from './components/movie-finder/movie-finder.component';
import { MovieSchedComponent } from './components/movie-scheduler/movie-scheduler.component';
import { ProcessingPaymentComponent } from './components/processing-payment/processing-payment.component';
import { SeatsComponent } from './components/seats/seats.component';
import { SummaryComponent } from './components/summary/summary.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PdfComponent } from './components/pdf/pdf.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'moviefinder', component: MovieFinderComponent},
  { path: 'seats', component: SeatsComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'moviescheduler', component: MovieSchedComponent},
  { path: 'snacks', component: ExtrasComponent},
  { path: 'processing', component: ProcessingPaymentComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'qrcode' , component: QrcodeComponent},
  { path: 'qrcode/:qrcode', component: QrcodeComponent},
  { path: 'purchases', component: PurchasesComponent},
  { path: 'pdf/:qrcode', component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
