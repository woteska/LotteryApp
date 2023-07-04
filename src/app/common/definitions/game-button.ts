import { EventEmitter } from '@angular/core';

export interface GameButton<TClick = void> {
  isDisabled: boolean;
  clicked: EventEmitter<TClick>;
  onClick: () => void;
}
