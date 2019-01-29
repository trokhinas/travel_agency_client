import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatListModule} from '@angular/material';

import { TourComponent } from './tour/tour.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';
import { TourDetailsComponent } from './tour/tour-details/tour-details.component';
import { TourMenuComponent } from './tour/tour-menu/tour-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    TourListComponent,
    TourDetailsComponent,
    TourMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
