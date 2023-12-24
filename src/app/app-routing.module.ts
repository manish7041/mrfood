import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './views/admin/menu/menu.component';
import { MainCartComponent } from './views/admin/main-cart/main-cart.component';
import { OfferComponent } from './views/admin/offer/offer.component';
import { SearchComponent } from './views/admin/search/search.component';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { UserComponent } from './views/admin/user/user.component';
import { AuthOtpComponent } from './views/auth/auth-otp/auth-otp.component';
// import { ContentComponent } from './views/admin/content/content.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { CartComponent } from './views/admin/cart/cart.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Menu',
    pathMatch: 'full'
  },

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'Menu',
        component: MenuComponent
      },
      {
        path: 'Cart',
        component: MainCartComponent
      },
      {
        path: 'Search',
        component: SearchComponent
      },
      {
        path: 'User',
        component: UserComponent
      },
      {
        path: 'Offer',
        component: OfferComponent
      },
      {
        path: 'Profile',
        component: ProfileComponent
      },
    ]
  },
  {
    path: 'Auth',
    component: AuthComponent,
    children: [
      {
        path: 'Auth-Otp',
        component: AuthOtpComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
