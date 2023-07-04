import { GameId } from './game-id';
import { GameType } from './game-type';
import { Playgrounds } from './playgrounds';

export interface Game extends GameType {
  id: GameId;
  playgrounds: Playgrounds;
  startedAt: string;
}
