import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../common/definitions/game';
import { GameId } from '../../common/definitions/game-id';
import { GameTypes } from '../../common/definitions/game-types';
import { GameService } from '../../common/services/game/game.service';
import { RandomService } from '../../common/services/random/random.service';
import * as GamesActions from '../../common/store/games/games.actions';
import * as GamesSelectors from '../../common/store/games/games.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  readonly id = this.gameService.createGameId();
  readonly gameType = GameTypes['6'];
  readonly game$: Observable<Game | undefined>;

  constructor(private readonly randomService: RandomService,
              private readonly gameService: GameService,
              private readonly store: Store) {
    this.store.dispatch(GamesActions.startNewGame({ id: this.id, gameType: this.gameType }));
    this.game$ = this.store.select(GamesSelectors.selectGame({ id: this.id }));
  }

  onNumbersSquareSelectedChange(gameId: GameId, playgroundIndex: number, value: number): void {
    this.store.dispatch(GamesActions.toggleSelectedValue({ id: gameId, playgroundIndex, value }));
  }

  onRandom(gameId: GameId, playgroundIndex: number): void {
    this.store.dispatch(GamesActions.generateRandomValues({ id: gameId, playgroundIndex }));
  }

  onDelete(gameId: GameId, playgroundIndex: number): void {
    this.store.dispatch(GamesActions.deleteSelectedValues({ id: gameId, playgroundIndex }));
  }

  onPlay(): void {
    void 0;
  }
}
