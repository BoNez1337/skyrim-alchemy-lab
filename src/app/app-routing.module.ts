import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { EffectsComponent } from './components/effects/effects.component';
import { BrewingComponent } from './components/brewing/brewing.component';

const routes: Routes = [
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'effects', component: EffectsComponent },
  { path: 'brewing', component: BrewingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
