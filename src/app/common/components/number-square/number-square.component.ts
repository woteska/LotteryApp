import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-number-square',
  standalone: true,
  imports: [CommonModule, MatRippleModule],
  templateUrl: './number-square.component.html',
  styleUrls: ['./number-square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberSquareComponent {
  @Input() isSelected = false;
  @Input() number = 0;
  @Input() isDisabled = false;
  @Output() isSelectedChange = new EventEmitter<boolean>();

  toggleSelection(): void {
    if (this.isDisabled) {
      return;
    }
    this.isSelected = !this.isSelected;
  }
}
