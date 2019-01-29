import {Component, Input, OnInit} from '@angular/core';
import {Tour} from './Tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  @Input() tour: Tour;

  constructor() { }

  ngOnInit() {

  }
  public isAvailable(): boolean {
    return this.checkDate() && this.checkLimit();
  }
  public checkDate(): boolean {
    const currentDate = new Date();
    return this.tour.startDate >= currentDate;
  }
  public checkLimit(): boolean {
    return this.tour.countLimit > 0;
  }

}
