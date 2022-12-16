import { Component, Input } from '@angular/core';
import { Dish } from 'src/app/services/datatypes';
import { Store } from 'src/app/store/store';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent {
  @Input() dish: Dish;

  constructor (private store: Store) {}

}
