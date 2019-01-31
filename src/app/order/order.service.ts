import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'api/orders';

  constructor(private http: HttpClient) {}

  public getOrder(id: number) {
    const path = this.buildPath(id);

    console.log('GET', path);
    return this.http.get<Order>(path);
  }
  public getAllOrders() {
    const path = this.buildPath('all');

    console.log('GET', path);
    return this.http.get<[Order]>(path);
  }
  public deleteOrder(id: number) {
    const path = this.buildPath(id);

    console.log('DELETE', path);
    const result = this.http.delete<boolean>(path);
    console.log(result);

    return result;
  }
  public createOrder(order: Order) {
    const path = this.buildPath();

    console.log('POST', path);
    const result = this.http.post<boolean>(path, order);
    console.log(result);

    return result;
  }
  public updateOrder(order: Order) {
    const path = this.buildPath();

    console.log('PUT', path);
    const result = this.http.put<boolean>(path, order);
    console.log(result);

    return result;
  }

  private buildPath(element?: any | null) {
    const path = `${this.url}/`;
    if (element !== undefined) {
      return `${this.url}/${element}`;
    }
    return path;

  }
}
