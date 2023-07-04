import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NumberSquaresContainerSelectedChange
} from '../../common/components/number-squares-container/number-squares-container-selected-change';
import { RandomService } from '../../common/services/random/random.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  selected: Array<number> = [];
  numberOfPlaygrounds = 4;
  containers: Array<number> = new Array(this.numberOfPlaygrounds);
  numberOfSquares = 49;
  squaresPerColumn = 7;
  numberOfValidMarks = 6;

  constructor(private readonly randomService: RandomService) {
  }

  onNumbersSquareSelectedChange(event: NumberSquaresContainerSelectedChange): void {
    if (event.isSelected) {
      this.selected = this.selected.filter(number => number !== event.value);
    } else {
      this.selected.push(event.value);
      this.selected = [...this.selected];
    }
  }

  random(index: number): void {
    this.selected = this.randomService.getRandomIntegers(this.numberOfValidMarks, {
      min: 1,
      max: this.numberOfSquares
    });
  }

  delete(index: number): void {
    this.selected = [];
  }

  play(): void {
    void 0;
  }
}
