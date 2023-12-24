import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './Service/dataservice.service';
import { NavComponent } from './views/admin/nav/nav.component';
import { HeaderComponent } from './views/admin/header/header.component';
import { HeaderHoverDirective } from './Service/Directive/header-hover.directive';
import { ScaleDirective } from './Service/Directive/scale.directive';
import { MenuComponent } from './views/admin/menu/menu.component';
import { MenuhoverDirective } from './Service/Directive/menuhover.directive';
import { FoodComponent } from './views/admin/food/food.component';
import { MainCartComponent } from './views/admin/main-cart/main-cart.component';
import { OfferComponent } from './views/admin/offer/offer.component';
import { SearchComponent } from './views/admin/search/search.component';
import { SearchoptionhoverDirective } from './Service/Directive/searchoptionhover.directive';
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from './Pipe/filterpipe.pipe';
import { PricefilterPipe } from './Pipe/pricefilter.pipe';
import { PopupComponent } from './views/admin/popup/popup.component';
import { ViewcontainerDirective } from './Service/Directive/viewcontainer.directive';
import { UserComponent } from './views/admin/user/user.component';
import { UserhoverDirective } from './Service/Directive/userhover.directive';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { AuthOtpComponent } from './views/auth/auth-otp/auth-otp.component';
import { NewViewContainerDirective } from './Service/Directive/new-view-container.directive';
import { AuthComponent } from './layout/auth/auth.component';
import { AdminComponent } from './layout/admin/admin.component';
import { CartComponent } from './views/admin/cart/cart.component';
import { AdminModule } from './layout/admin/admin.module';
import { AuthModule } from './layout/auth/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,

  CartComponent,
    NavComponent,
    HeaderComponent,
    HeaderHoverDirective,
    ScaleDirective,
    MenuComponent,
    MenuhoverDirective,
    FoodComponent,
    MainCartComponent,
    OfferComponent,
    SearchComponent,
    SearchoptionhoverDirective,
    FilterpipePipe,
    PricefilterPipe,
    PopupComponent,
    ViewcontainerDirective,
    UserComponent,
    UserhoverDirective,
    ProfileComponent,
    NewViewContainerDirective,
    AuthOtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   AdminModule,
AuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('appModule');
    
  }
 }
