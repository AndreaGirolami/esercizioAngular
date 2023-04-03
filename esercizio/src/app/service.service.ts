import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private url = 'http://localhost:5000/api/restaurant/getRestaurants/1/20';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get(this.url);
  }
}
