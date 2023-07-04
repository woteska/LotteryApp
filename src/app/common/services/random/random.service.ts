import { Injectable } from '@angular/core';
import * as Chance from 'chance';
import { RandomIntegerOptions } from './random-integer-options';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private readonly chance = new Chance();

  getRandomInteger(options?: RandomIntegerOptions): number {
    return this.chance.integer(options);
  }

  getRandomIntegers(n: number, options?: RandomIntegerOptions): Array<number> {
    const shouldBeUnique = options?.shouldBeUnique ?? false;
    if (options && options.max !== undefined && options.min !== undefined && shouldBeUnique) {
      if (this.canRunOutOfUniqueValues(n, options.min, options.max)) {
        throw Error('Cannot generate {{n}} numbers because {{n}} is greater than min-max interval.');
      }
    }
    const integersToReturn = new Set<number>();
    while (integersToReturn.size < n) {
      const randomInteger = this.getRandomInteger(options);
      if (!shouldBeUnique || !integersToReturn.has(randomInteger)) {
        integersToReturn.add(randomInteger);
      }
    }
    return Array.from(integersToReturn);
  }

  private canRunOutOfUniqueValues(n: number, min: number, max: number): boolean {
    return n < (max - min);
  }
}
