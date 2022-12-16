import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from 'src/app/services/datatypes';
import { Store } from 'src/app/store/store';

export interface AmountChangedEvent {
  id: number;
  nrOfReservations: number;
}
@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css'],
})
export class DishCardComponent {
  @Input() dish: Dish;
  @Output() dishReservationNumberChanged =
    new EventEmitter<AmountChangedEvent>();

  constructor(private store: Store) {}

  public handleButtonClick(event: number) {
    const dishReservationNumberChangedEvent: AmountChangedEvent = {
      id: this.dish.id,
      nrOfReservations: event.valueOf(),
    };
    this.dishReservationNumberChanged.emit(
      dishReservationNumberChangedEvent
    );
  }
}
