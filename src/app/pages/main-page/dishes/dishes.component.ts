import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/services/datatypes';
import { DishService } from 'src/app/services/dish.service';
import { AmountChangedEvent } from 'src/app/pages/main-page/dishes/dish-card/dish-card.component';

export interface BasketEntry {
  id: number;
  nrOfReservations: number;
}
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})

export class DishesComponent implements OnInit {
  constructor(private dishService: DishService) {}

  dishes: Observable<Dish[]>;
  public basket: BasketEntry[]
  public nrOfDishesInChart = 0;
  public nrOfDishes: number;

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    // let subscriber = this.dishes.subscribe((x) => this.nrOfDishes = x.length);
  }

  public handleReservationNrChanged(event: AmountChangedEvent) {
    console.log(event.id, event.nrOfReservations);
  }

  ngOnDestroy(){

  }
}
