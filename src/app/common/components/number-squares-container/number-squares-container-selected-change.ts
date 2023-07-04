import { SquareSelectedChange } from '../square/square-selected-change';

export interface NumberSquaresContainerSelectedChange extends SquareSelectedChange<number> {
  containerId: string | number;
  index: number;
}
