import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameValidity } from '../../definitions/game-validity';
import { PlaygroundValidityPipe } from '../../pipes/playground-validity/playground-validity.pipe';

@Component({
  selector: 'app-game-validity',
  standalone: true,
  imports: [CommonModule, PlaygroundValidityPipe],
  templateUrl: './game-validity.component.html',
  styleUrls: ['./game-validity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameValidityComponent {
  @Input({ required: true }) gameValidity: GameValidity = { id: '', isValid: false, playgrounds: [] };
}
