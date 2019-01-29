import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tour} from './Tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private url = 'api/tours';

  constructor(private http: HttpClient) {}

  public getTour(id: number) {
    const path = this.buildPath(id);

    console.log('GET', path);
    return this.http.get<Tour>(path);
  }
  public getAllTours() {
    const path = this.buildPath('all');

    console.log('GET', path);
    return this.http.get<[Tour]>(path);
  }
  public deleteTour(id: number) {
    const path = this.buildPath(id);

    console.log('DELETE', path);
    const result = this.http.delete<boolean>(path);
    console.log(result);

    return result;
  }
  public createTour(tour: Tour) {
    const path = this.buildPath();

    console.log('POST', path);
    const result = this.http.post<boolean>(path, tour, );
    console.log(result);

    return result;
  }
  public updateTour(tour: Tour) {
    const path = this.buildPath();

    console.log('PUT', path);
    const result = this.http.put<boolean>(path, tour, );
    console.log(result);

    return result;
  }

  private buildPath(element?: any | null) {
    return `${this.url}/${element}`;
  }
}
