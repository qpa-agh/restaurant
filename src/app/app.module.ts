import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishCardComponent } from './pages/main-page/dishes/dish-card/dish-card.component';
import { DishesComponent } from './pages/main-page/dishes/dishes.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ReservationChangerComponent } from './pages/main-page/dishes/dish-card/reservation-changer/reservation-changer.component';


@NgModule({
  declarations: [
    AppComponent,
    DishCardComponent,
    DishesComponent,
    MainPageComponent,
    ReservationChangerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
