import { Component } from '@angular/core';
import * as data from '../../../data/ingredients.json';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent {
    public ingredients = data.ingredients;
    public selectedIngredient;

    constructor() {
        console.log(this.ingredients)
    }

    public selectIngredient(ingredient) {
        console.log(ingredient);
        if (ingredient) {
            this.selectedIngredient = ingredient;
        }
    }
}
