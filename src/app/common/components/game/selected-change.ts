import { GameId } from '../../definitions/game-id';

export interface SelectedChange {
  gameId: GameId;
  playgroundIndex: number;
  value: number;
}
