import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Playground } from '../../definitions/playground';
import { GameService } from '../../services/game/game.service';
import { RandomService } from '../../services/random/random.service';
import * as GamesActions from '../games/games.actions';
import * as GamesSelectors from '../games/games.selectors';

@Injectable({
  providedIn: 'root'
})
export class GamesEffects {

  readonly startNewGame$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        GamesActions.startNewGame
      ),
      map(action => {
        const game = this.gameService.getNewGame(action.id, action.gameType);
        return GamesActions.addGame({ game });
      })
    );
  });

  readonly toggleSelectedValue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        GamesActions.toggleSelectedValue
      ),
      concatLatestFrom(action => this.store.select(GamesSelectors.selectGame({ id: action.id }))),
      map(([action, game]) => {
        if (!game) {
          return GamesActions.gameNotFound({ id: action.id });
        }
        const playgroundToUpdate = game.playgrounds[action.playgroundIndex];
        const currentSelectedValues = playgroundToUpdate[1].selectedValues;
        const isValueSelected = currentSelectedValues.includes(action.value);

        let updatedSelectedValues: Array<number> = [];
        if (isValueSelected) {
          updatedSelectedValues = currentSelectedValues.filter(value => value !== action.value);
        } else {
          updatedSelectedValues = [...currentSelectedValues, action.value];
        }

        const newPlayground: Playground = {
          selectedValues: updatedSelectedValues
        };

        return GamesActions.updatePlayground({
          id: action.id,
          playgroundIndex: action.playgroundIndex,
          playground: newPlayground
        });
      })
    );
  });

  readonly generateRandomValues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        GamesActions.generateRandomValues
      ),
      concatLatestFrom(action => this.store.select(GamesSelectors.selectGame({ id: action.id }))),
      map(([action, game]) => {
        if (!game) {
          return GamesActions.gameNotFound({ id: action.id });
        }

        const updatedSelectedValues = this.randomService.getRandomIntegers(game.rules.numberOfValidMarks, {
          min: game.rules.min,
          max: game.rules.max
        });

        const newPlayground: Playground = {
          selectedValues: updatedSelectedValues
        };

        return GamesActions.updatePlayground({
          id: action.id,
          playgroundIndex: action.playgroundIndex,
          playground: newPlayground
        });
      })
    );
  });

  readonly deleteSelectedValues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        GamesActions.deleteSelectedValues
      ),
      concatLatestFrom(action => this.store.select(GamesSelectors.selectGame({ id: action.id }))),
      map(([action, game]) => {
        if (!game) {
          return GamesActions.gameNotFound({ id: action.id });
        }

        const newPlayground: Playground = {
          selectedValues: []
        };

        return GamesActions.updatePlayground({
          id: action.id,
          playgroundIndex: action.playgroundIndex,
          playground: newPlayground
        });
      })
    );
  });

  constructor(private readonly actions$: Actions,
              private readonly store: Store,
              private readonly gameService: GameService,
              private readonly randomService: RandomService) {
  }
}
