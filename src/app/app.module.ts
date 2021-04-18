import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { EffectsComponent } from './components/effects/effects.component';
import { BrewingComponent } from './components/brewing/brewing.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    EffectsComponent,
    BrewingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
