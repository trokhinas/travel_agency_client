import { Component, OnInit } from '@angular/core';
import {TourService} from '../tour.service';
import {Tour} from '../Tour';

@Component({
  selector: 'app-tour-menu',
  templateUrl: './tour-menu.component.html',
  styleUrls: ['./tour-menu.component.scss']
})
export class TourMenuComponent implements OnInit {
  private allTours: [Tour];

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.getAllTours();
  }

  public getAllTours() {
    this.tourService.getAllTours().subscribe(response => {
      this.allTours = response;
    });
  }

}
