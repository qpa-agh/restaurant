import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dish } from './datatypes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private htpp: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.htpp
      .get<{ dishes: Dish[] }>('http://127.0.0.1:5500/dishes.json')
      .pipe(map(json => json['dishes']));
  }
}
