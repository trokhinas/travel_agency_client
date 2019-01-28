import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourListComponent} from './tour/tour-list/tour-list.component';

const routes: Routes = [
  {
    path: 'tours',
    component: TourListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
