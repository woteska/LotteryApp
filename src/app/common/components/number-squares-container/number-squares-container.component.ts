import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IsInPipe } from '../../pipes/is-in/is-in.pipe';
import { ContentOverlayComponent } from '../content-overlay/content-overlay.component';
import { SquareSelectedChange } from '../square/square-selected-change';
import { SquareSelectionBehaviour } from '../square/square-selection-behaviour';
import { SquareComponent } from '../square/square.component';
import { NumberSquaresContainerSelectedChange } from './number-squares-container-selected-change';

@Component({
  selector: 'app-number-squares-container',
  standalone: true,
  imports: [CommonModule, SquareComponent, IsInPipe, ContentOverlayComponent],
  templateUrl: './number-squares-container.component.html',
  styleUrls: ['./number-squares-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberSquaresContainerComponent {
  _squares: Array<unknown> = [];
  @Input({ required: true }) id: string | number = '';
  @Input() shouldShowId = true;
  @Input() squaresPerColumn = 0;
  @Input() selectionBehaviour: SquareSelectionBehaviour = SquareSelectionBehaviour.EmitOnly;
  @Input() selectedValues: Array<number> = [];
  @Input() isDisabled = false;
  @Input() offset = 1;
  @Input() squaresSize = '2rem';
  @Input() squaresGap = '0.2rem';
  @Output() readonly selectedChange = new EventEmitter<NumberSquaresContainerSelectedChange>();

  @Input() set numberOfSquares(value: number) {
    this._squares = new Array(value);
  }

  trackBy(index: number, _: unknown): number {
    return index;
  }

  onSquareSelectedChange(change: SquareSelectedChange<number>, index: number): void {
    this.selectedChange.emit({
      ...change,
      index,
      id: this.id
    });
  }
}
