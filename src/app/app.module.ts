
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NuComponent } from './nu/nu.component';
import { BetraiComponent } from './betrai/betrai.component';
import { BegaiComponent } from './begai/begai.component';
import { SomiComponent } from './somi/somi.component';
import { VayComponent } from './vay/vay.component';
import { JeansComponent } from './jeans/jeans.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { FooterComponent } from './footer/footer.component';
import { SaleComponent } from './sale/sale.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NuComponent,
    BetraiComponent,
    BegaiComponent,
    SomiComponent,
    VayComponent,
    JeansComponent,
    LienheComponent,
    HomeComponent,
    InfoComponent,
    ShoppingcartComponent,
    FooterComponent,
    SaleComponent,
    DangkyComponent,
    DangnhapComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
