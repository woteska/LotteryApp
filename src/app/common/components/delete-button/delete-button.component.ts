import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GameButton } from '../../definitions/game-button';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteButtonComponent implements GameButton {
  @Input() readonly isDisabled = false;
  @Output() readonly clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
