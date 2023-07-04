import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteValues } from '../../common/components/game/delete-values';
import { GenerateRandomValues } from '../../common/components/game/generate-random-values';
import { SelectedChange } from '../../common/components/game/selected-change';
import { GameTypes } from '../../common/definitions/game-types';
import { GameService } from '../../common/services/game/game.service';
import * as GamesActions from '../../common/store/games/games.actions';
import * as GamesSelectors from '../../common/store/games/games.selectors';

@Component({
  selector: 'app-game-routing',
  templateUrl: './game-routing.component.html',
  styleUrls: ['./game-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameRoutingComponent {
  private readonly gameType1 = GameTypes['6'];
  private readonly gameType2 = GameTypes['5'];
  private readonly id1 = this.gameService.createGameId();
  readonly game1$ = this.store.select(GamesSelectors.selectGame({ id: this.id1 }));
  readonly gameValidity1$ = this.store.select(GamesSelectors.selectCheckGameValidity({ id: this.id1 }));
  private readonly id2 = this.gameService.createGameId();
  readonly game2$ = this.store.select(GamesSelectors.selectGame({ id: this.id2 }));
  readonly gameValidity2$ = this.store.select(GamesSelectors.selectCheckGameValidity({ id: this.id2 }));

  constructor(private readonly gameService: GameService,
              private readonly store: Store) {
    // eslint-disable-next-line @ngrx/avoid-dispatching-multiple-actions-sequentially
    this.store.dispatch(GamesActions.startNewGame({ id: this.id1, gameType: this.gameType1 }));
    // eslint-disable-next-line @ngrx/avoid-dispatching-multiple-actions-sequentially
    this.store.dispatch(GamesActions.startNewGame({ id: this.id2, gameType: this.gameType2 }));
  }

  onSelectionChange(event: SelectedChange): void {
    this.store.dispatch(GamesActions.toggleSelectedValue({
      id: event.gameId,
      playgroundIndex: event.playgroundIndex,
      value: event.value
    }));
  }

  onRandom(event: GenerateRandomValues): void {
    this.store.dispatch(GamesActions.generateRandomValues({
      id: event.gameId,
      playgroundIndex: event.playgroundIndex
    }));
  }

  onDeleteValues(event: DeleteValues): void {
    this.store.dispatch(GamesActions.deleteSelectedValues({
      id: event.gameId,
      playgroundIndex: event.playgroundIndex
    }));
  }
}
