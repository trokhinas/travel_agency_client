import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourListComponent} from './tour/tour-list/tour-list.component';
import {TourDetailsComponent} from './tour/tour-details/tour-details.component';
import {TourMenuComponent} from './tour/tour-menu/tour-menu.component';
import {ProfileComponent} from './user/profile/profile.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
