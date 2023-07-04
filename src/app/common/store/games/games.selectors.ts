import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameId } from '../../definitions/game-id';
import * as fromGames from './games.reducer';

export const selectGamesState = createFeatureSelector<fromGames.GamesState>(fromGames.name);

const selectGames = createSelector(selectGamesState, state => state.games);

export const selectGame = (props: { id: GameId }) =>
  createSelector(selectGames, games => {
      return games[props.id];
    }
  );
