import { Component, OnInit } from '@angular/core';
import {TourService} from '../tour.service';
import {ActivatedRoute, Params} from '@angular/router';
import {PlatformLocation} from '@angular/common';
import {Tour} from '../Tour';
import {switchMap} from 'rxjs/operators';
import {OrderService} from '../../order/order.service';
import {computeStyle} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {
  public _tour: Tour;
  public isOrdered: boolean;

  constructor(private tourService: TourService,
              private orderService: OrderService,
              private router: ActivatedRoute,
              private location: PlatformLocation) { }

  ngOnInit() {
    this.getTour();
  }

  private getTour() {
    this.router.params
      .pipe(switchMap((params: Params) => this.tourService.getTour(params['id'])))
      .subscribe(response => {
        this._tour = response as Tour;
        this.isTourOrderedByUser();
      });
  }
  private back() {
    this.location.back();
  }

  private isTourOrderedByUser() {
    this.orderService
      .getAllOrders()
      .subscribe( orders => {
        this.isOrdered = orders
          .find(order => order.tourId === this._tour.tourId) !== undefined;
      });
  }

}
