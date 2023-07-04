import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GameButton } from '../../definitions/game-button';

@Component({
  selector: 'app-random-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './random-button.component.html',
  styleUrls: ['./random-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomButtonComponent implements GameButton {
  @Output() readonly clicked = new EventEmitter<void>;
  @Input() isDisabled = false;

  onClick(): void {
    this.clicked.emit();
  }
}
