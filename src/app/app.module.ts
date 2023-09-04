import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { HttpClientModule } from '@angular/common/http';
import { InfosComponent } from './components/infos/infos.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './pages/product/product.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { BuyItComponent } from './components/buy-it/buy-it.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { AccountComponent } from './pages/account/account.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CallToActionComponent,
    FeaturedComponent,
    FeaturedCardComponent,
    InfosComponent,
    AboutComponent,
    FooterComponent,
    ProductComponent,
    StoreComponent,
    HomeComponent,
    BuyItComponent,
    BreadcrumbComponent,
    CartComponent,
    CartItemComponent,
    GalleryComponent,
    GalleryItemComponent,
    AccountComponent,
    SignInComponent,
    MyAccountComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
