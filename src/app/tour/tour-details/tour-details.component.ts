import { Component, OnInit } from '@angular/core';
import {TourService} from '../tour.service';
import {ActivatedRoute, Params} from '@angular/router';
import {PlatformLocation} from '@angular/common';
import {Tour} from '../Tour';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {
  public tour: Tour;

  constructor(private tourService: TourService,
              private router: ActivatedRoute,
              private location: PlatformLocation) { }

  ngOnInit() {
    this.getTour();
  }

  private getTour() {
    this.router.params
      .pipe(switchMap((params: Params) => this.tourService.getTour(params['id'])))
      .subscribe(response => this.tour = response);
  }
  private back() {
    this.location.back();
  }
  // заглушка проверки на то, участвует ли пользователь уже в этом туре
  private isTourOrderedByUser() {
    return null;
  }

}
