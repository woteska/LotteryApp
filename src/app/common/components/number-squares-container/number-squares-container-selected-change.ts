import { SquareSelectedChange } from '../square/square-selected-change';

export interface NumberSquaresContainerSelectedChange extends SquareSelectedChange<number> {
  id: string | number;
  index: number;
}
