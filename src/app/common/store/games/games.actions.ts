import { createAction, props } from '@ngrx/store';
import { Game } from '../../definitions/game';
import { GameId } from '../../definitions/game-id';
import { GameType } from '../../definitions/game-type';
import { Playground } from '../../definitions/playground';

const prefix = '[Games]';

export const init = createAction(`${prefix} Init`);
export const clear = createAction(`${prefix} Clear`);

export const startNewGame = createAction(`${prefix} Start New Game`,
  props<{ id: GameId; gameType: GameType; }>());

export const addGame = createAction(`${prefix} Add Game`,
  props<{ game: Game; }>());

export const gameNotFound = createAction(`${prefix} Game Not Found Error`,
  props<{ id: GameId; }>());

export const toggleSelectedValue = createAction(`${prefix} Toggle Selected Value`,
  props<{ id: GameId; playgroundIndex: number; value: number; }>());

export const updatePlayground = createAction(`${prefix} Update Playground`,
  props<{ id: GameId; playgroundIndex: number; playground: Playground; }>());

export const generateRandomValues = createAction(`${prefix} Generate Random`,
  props<{ id: GameId; playgroundIndex: number; }>());

export const deleteSelectedValues = createAction(`${prefix} Delete Selected Values`,
  props<{ id: GameId; playgroundIndex: number; }>());
