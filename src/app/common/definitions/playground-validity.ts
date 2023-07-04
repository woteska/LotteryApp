export interface PlaygroundValidity {
  id: number;
  isEmpty: boolean;
  orderedSelectedValues: Array<number>;
  overflowCount: number;
  missingCount: number;
  isValid: boolean;
  hasOverflow: boolean;
  hasMissing: boolean;
}
