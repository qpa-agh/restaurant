import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationChangerComponent } from './reservation-changer.component';

describe('ReservationChangerComponent', () => {
  let component: ReservationChangerComponent;
  let fixture: ComponentFixture<ReservationChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
