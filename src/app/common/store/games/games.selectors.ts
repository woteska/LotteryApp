import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Game } from '../../definitions/game';
import { GameId } from '../../definitions/game-id';
import { GameValidity } from '../../definitions/game-validity';
import { PlaygroundValidity } from '../../definitions/playground-validity';
import * as fromGames from './games.reducer';

export const selectGamesState = createFeatureSelector<fromGames.GamesState>(fromGames.name);

const selectGames = createSelector(selectGamesState, state => state.games);

export const selectGame = (props: { id: GameId; }): MemoizedSelector<object, Game> =>
  createSelector(selectGames, games => {
      return games[props.id];
    }
  );

export const selectCheckGameValidity = (props: { id: GameId; }): MemoizedSelector<object, GameValidity> =>
  createSelector(selectGame({ id: props.id }), game => {
      let hasInvalidPlayground = false;

      const playgroundsValidity: Array<PlaygroundValidity> = game.playgrounds.map(playground => {
        const selectedValues = [...playground[1].selectedValues];
        const hasOverflow = game.rules.numberOfValidMarks < selectedValues.length;
        const hasMissing = game.rules.numberOfValidMarks > selectedValues.length;
        const isEmpty = !selectedValues.length;
        const isValid = !isEmpty && !hasMissing && !hasOverflow;

        if (!isValid) {
          hasInvalidPlayground = true;
        }

        return {
          id: playground[0],
          isEmpty,
          orderedSelectedValues: selectedValues.sort((a, b) => a - b),
          overflowCount: hasOverflow ? selectedValues.length - game.rules.numberOfValidMarks : 0,
          missingCount: hasMissing ? game.rules.numberOfValidMarks - selectedValues.length : 0,
          hasOverflow,
          hasMissing,
          isValid
        };
      });

      const gameValidity: GameValidity = {
        id: game.id,
        isValid: hasInvalidPlayground,
        playgrounds: playgroundsValidity
      };

      return gameValidity;
    }
  );
