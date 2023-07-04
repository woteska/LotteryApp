import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { SquareSelectedChange } from './square-selected-change';
import { SquareSelectionBehaviour } from './square-selection-behaviour';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule, MatRippleModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent<T extends string | number> {
  @Input() isSelected = false;
  @Input() selectionBehaviour: SquareSelectionBehaviour = SquareSelectionBehaviour.Auto;
  @Input({ required: true }) value: T | null = null;
  @Input() size = '1rem';
  @Input() isDisabled = false;
  @Output() readonly isSelectedChange = new EventEmitter<boolean>();
  @Output() readonly selectedChange = new EventEmitter<SquareSelectedChange<T>>();

  onSelect(): void {
    if (this.isDisabled || this.value === null) {
      return;
    }
    if (this.selectionBehaviour === SquareSelectionBehaviour.Auto) {
      this.isSelected = !this.isSelected;
    }
    this.selectedChange.emit({
      value: this.value,
      isSelected: this.isSelected
    });
  }
}
