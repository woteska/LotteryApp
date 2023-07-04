import { Injectable } from '@angular/core';
import { Game } from '../../definitions/game';
import { GameId } from '../../definitions/game-id';
import { GameType } from '../../definitions/game-type';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  createGameId(): GameId {
    return `${new Date().toISOString()}_${Math.random().toString()}`;
  }

  getNewGame(id: GameId, gameType: GameType): Game {
    return {
      id,
      startedAt: new Date().toISOString(),
      ...gameType,
      playgrounds: new Array(gameType.rules.numberOfPlaygrounds).fill(null).map((_, index) => [index, { selectedValues: [] }])
    };
  }
}
