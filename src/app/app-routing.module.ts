import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourListComponent} from './tour/tour-list/tour-list.component';
import {TourDetailsComponent} from './tour/tour-details/tour-details.component';
import {TourMenuComponent} from './tour/tour-menu/tour-menu.component';
import {ProfileComponent} from './user/profile/profile.component';
import {OrderListComponent} from './order/order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tours',
    pathMatch: 'full'
  },
  {
    path: 'tours',
    component: TourMenuComponent
  },
  {
    path: 'tours/:id',
    component: TourDetailsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'orders',
    component: OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
