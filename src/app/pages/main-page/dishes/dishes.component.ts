import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/services/datatypes';
import { DishService } from 'src/app/services/dish.service';
import { AmountChangedEvent } from 'src/app/pages/main-page/dishes/dish-card/dish-card.component';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent implements OnInit {
  constructor(private dishService: DishService) {}

  dishes: Observable<Dish[]>;
  public basket = new Map();
  public nrOfDishesInChart = 0;

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  public handleReservationNrChanged(event: AmountChangedEvent) {
    if (event.nrOfReservations == 0) {
      this.basket.delete(event.id);
    } else {
      this.basket.set(event.id, event.nrOfReservations);
    }
    let sum = 0;
    this.basket.forEach((v) => {
      sum += v;
    });
    this.nrOfDishesInChart = sum;
  }
}
