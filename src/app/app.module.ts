import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishCardComponent } from './pages/main-page/dishes/dish-card/dish-card.component';
import { DishesComponent } from './pages/main-page/dishes/dishes.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ReservationChangerComponent } from './pages/main-page/dishes/dish-card/reservation-changer/reservation-changer.component';
import { AddNewDishFormComponent } from './pages/main-page/add-new-dish-form/add-new-dish-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DishCardComponent,
    DishesComponent,
    MainPageComponent,
    ReservationChangerComponent,
    AddNewDishFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
