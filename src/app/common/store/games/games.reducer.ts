import { createReducer, on } from '@ngrx/store';
import { Games } from '../../definitions/games';
import * as GamesActions from './games.actions';

export const name = 'games';

export interface GamesState {
  games: Games;
}

export const initialState: Readonly<GamesState> = {
  games: {}
};

export const reducer = createReducer(
  initialState,
  on(GamesActions.clear, (_): GamesState => (initialState)),
  on(GamesActions.addGame, (state, { game }): GamesState => ({
    ...state,
    games: {
      ...state.games,
      [game.id]: game
    }
  })),
  on(GamesActions.updatePlayground, (state, { id, playgroundIndex, playground }): GamesState => ({
    ...state,
    games: {
      ...state.games,
      [id]: {
        ...state.games[id],
        playgrounds: state.games[id].playgrounds
          .map((currentPlayground, index) =>
            index === playgroundIndex ? [index, playground] : currentPlayground)
      }
    }
  }))
);
