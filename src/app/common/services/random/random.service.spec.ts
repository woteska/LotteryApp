import { TestBed } from '@angular/core/testing';
import { RandomService } from './random.service';

describe('RandomService', () => {
  let service: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRandomIntegers()', () => {
    it('should return n unique numbers', () => {
      for (let i = 0; i < 1000; i++) {
        const numbers = service.getRandomIntegers(2, { shouldBeUnique: true, min: 0, max: 1 });
        expect(numbers[0] === numbers[1]).toBeFalse();
      }
      expect(service).toBeTruthy();
    });

    it('should return n numbers', () => {
      for (let i = 0; i < 1000; i++) {
        const numbers = service.getRandomIntegers(10);
        expect(numbers.length).toBe(10);
      }
      expect(service).toBeTruthy();
    });
  });

});
