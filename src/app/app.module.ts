import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BodyComponent } from './shared/components/body/body.component';
import { AboutComponent } from './home/pages/about/about.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { ProductsComponent } from './home/pages/products/products.component';
import { CardapioComponent } from './home/pages/cardapio/cardapio.component';
import { CardapioservicesService } from './services/cardapioservices.service';
import { HttpClientModule } from '@angular/common/http';
import { E404Component } from './home/pages/e404/e404.component';
import { PrivacyComponent } from './home/pages/privacy/privacy.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    CardapioComponent,
    E404Component,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
