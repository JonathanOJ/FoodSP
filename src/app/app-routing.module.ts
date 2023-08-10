import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodSPBodyComponent } from './food-sp-body/food-sp-body.component';

const routes: Routes = [
  { path: 'inicio', component: FoodSPBodyComponent },
  { path: 'cardapio', component: FoodSPBodyComponent },
  { path: 'sobre', component: FoodSPBodyComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
