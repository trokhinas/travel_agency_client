import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {Order} from '../Order';
import {GlobalDataService} from '../../global-data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public orders: Order[];

  constructor(private orderService: OrderService,
              private globalData: GlobalDataService) { }

  ngOnInit() {
    this.orderService
      .getAllOrders()
      .subscribe(
        orders => this.orders = orders
          .filter( order => order.userId === this.globalData.getUserId()));
  }

}
