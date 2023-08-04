import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodSPFooterComponent } from './food-sp-footer/food-sp-footer.component';
import { FoodSPBodyComponent } from './food-sp-body/food-sp-body.component';
import { FoodSPHeaderComponent } from './food-sp-header/food-sp-header.component';
import { FoodSPCardComponent } from './food-sp-card/food-sp-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodSPFooterComponent,
    FoodSPBodyComponent,
    FoodSPHeaderComponent,
    FoodSPCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
