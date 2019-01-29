import { Component } from '@angular/core';
import {GlobalDataService} from './global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travelAgencyClient';

  constructor(private globalData: GlobalDataService) {}

  public isLoggedIn() {
    return this.globalData.isLogIn();
  }
}
