import { GameType } from './game-type';

export const GameTypes: Readonly<{ [gameName: string]: GameType; }> = {
  '5': {
    rules: {
      numberOfPlaygrounds: 4,
      numberOfSquares: 90,
      squaresPerColumn: 9,
      numberOfValidMarks: 5,
      min: 1,
      max: 90
    }
  },
  '6': {
    rules: {
      numberOfPlaygrounds: 4,
      numberOfSquares: 49,
      squaresPerColumn: 7,
      numberOfValidMarks: 6,
      min: 1,
      max: 49
    }
  }
} as const;
