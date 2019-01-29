import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../Tour';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {
  @Input() tours: Tour[];

  constructor() { }

  ngOnInit() {
    if (this.tours == null) {
      this.fakeTours(5);
    }

  }

  public fakeTours(j: number) {
    this.tours = Array<Tour>();
    let i;
    for (i = 0; i < j - 1; i++) {
      this.tours[i] = new Tour();
      this.tours[i].name = 'Tour 1';
      this.tours[i].countLimit = 15;
      this.tours[i].startDate = new Date(1998, 10, 18);
      this.tours[i].endDate = new Date(2098, 10, 18);
      this.tours[i].description = 'Some description';
      this.tours.push(this.tours[i]);
    }
    console.log(this.tours.length);
    console.log(i);
  }

}
