import { Component } from '@angular/core';
import * as data from '../../../data/effects.json';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent {
    public effects = data.effects;
    public selectedEffect;

    constructor() {
        console.log(this.effects)
    }

    public selectEffect(effect) {
        console.log(effect);
        if (effect) {
            this.selectedEffect = effect;
        }
    }
}
