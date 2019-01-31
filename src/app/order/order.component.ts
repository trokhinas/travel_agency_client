import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../tour/Tour';
import {OrderService} from './order.service';
import {Order} from './Order';
import {PlatformLocation} from '@angular/common';
import {Router} from '@angular/router';
import {TourService} from '../tour/tour.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public tour: Tour;
  @Input()
  public order: Order;

  constructor(private orderService: OrderService,
              private tourService: TourService,
              private location: PlatformLocation,
              private router: Router) { }

  ngOnInit() {
    this.tourService
      .getTour(this.order.tourId)
      .subscribe( tour => this.tour = tour);
  }

  public cancel() {
    this.orderService
      .deleteOrder(this.order.orderId)
      .subscribe(() => this.location.back());
  }

}
