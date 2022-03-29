import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { BannerComponent } from './banner/banner.component';
import { SidebarModule } from 'primeng/sidebar';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopproductComponent } from './shopproduct/shopproduct.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DownloadAppComponent } from './download-app/download-app.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {MatTabsModule} from '@angular/material/tabs';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent,
    ShopsComponent,
    ShopproductComponent,
    LayoutComponent,
    BannerComponent,
    DownloadAppComponent,
    ProductdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidebarModule,
    MatGridListModule,
    CarouselModule,
    MatTabsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
