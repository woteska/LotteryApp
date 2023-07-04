import { PlaygroundValidity } from './playground-validity';

export interface GameValidity {
  id: string;
  isValid: boolean;
  playgrounds: Array<PlaygroundValidity>;
}
