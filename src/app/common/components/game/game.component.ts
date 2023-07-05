import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../definitions/game';
import { GameId } from '../../definitions/game-id';
import { GameValidity } from '../../definitions/game-validity';
import { Playground } from '../../definitions/playground';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { GameValidityComponent } from '../game-validity/game-validity.component';
import { NumberSquaresContainerComponent } from '../number-squares-container/number-squares-container.component';
import { PlayButtonComponent } from '../play-button/play-button.component';
import { RandomButtonComponent } from '../random-button/random-button.component';
import { DeleteValues } from './delete-values';
import { GenerateRandomValues } from './generate-random-values';
import { SelectedChange } from './selected-change';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [
    CommonModule,
    NumberSquaresContainerComponent,
    RandomButtonComponent,
    PlayButtonComponent,
    GameValidityComponent,
    DeleteButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  @Input({ required: true }) game: Game | null = null;
  @Input({ required: true }) gameValidity: GameValidity | null = null;
  @Input() isValidityShown = false;
  @Output() readonly generateRandomValues = new EventEmitter<GenerateRandomValues>();
  @Output() readonly deleteValues = new EventEmitter<DeleteValues>();
  @Output() readonly selectionChange = new EventEmitter<SelectedChange>();

  onSelectedChange(gameId: GameId, playgroundIndex: number, value: number): void {
    this.selectionChange.emit({ gameId, playgroundIndex, value });
  }

  trackBy(index: number, playground: [id: number, playgroud: Playground]): number {
    return playground[0];
  }

  onGenerateRandomValues(gameId: GameId, playgroundIndex: number): void {
    this.generateRandomValues.emit({ gameId, playgroundIndex });
  }

  onDeleteValues(gameId: GameId, playgroundIndex: number): void {
    this.deleteValues.emit({ gameId, playgroundIndex });
  }

  onPlay(): void {
    this.isValidityShown = true;
  }
}
