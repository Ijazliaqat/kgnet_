import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ShopproductComponent } from './shopproduct/shopproduct.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent,
    children: [
      {path:'', component:BannerComponent},
      {path: 'shopproduct', component:ShopproductComponent},
      {path: 'productdetails', component:ProductdetailsComponent}
    ]
    
  }
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
