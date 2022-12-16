import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/services/datatypes';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor(private dishService: DishService){}

  dishes: Observable<Dish[]>;

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }
}
