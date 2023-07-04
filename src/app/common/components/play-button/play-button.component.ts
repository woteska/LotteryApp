import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GameButton } from '../../definitions/game-button';

@Component({
  selector: 'app-play-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayButtonComponent implements GameButton {
  @Output() readonly clicked = new EventEmitter<void>;
  @Input() isDisabled = false;

  onClick(): void {
    this.clicked.emit();
  }
}
