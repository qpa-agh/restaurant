import {
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-reservation-changer',
  templateUrl: './reservation-changer.component.html',
  styleUrls: ['./reservation-changer.component.css'],
})
export class ReservationChangerComponent {
  @Input() maxValue: number;
  @Output() valueChanged = new EventEmitter<number>();
  @ViewChild('counter') counter: ElementRef;
  public value = 0;

  public handlePlusClick() {
    this.value += 1;
    this.counter.nativeElement.textContent = this.value;
    this.valueChanged.emit(this.value);
  }

  public handleMinusClick() {
    this.value -= 1;
    this.counter.nativeElement.textContent = this.value;
    this.valueChanged.emit(this.value);
  }
}
