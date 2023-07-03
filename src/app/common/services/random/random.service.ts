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
    const integersToReturn: Array<number> = [];
    for (let i = 0; i < n; i++) {
      integersToReturn.push(this.getRandomInteger(options));
    }
    return integersToReturn;
  }
}
