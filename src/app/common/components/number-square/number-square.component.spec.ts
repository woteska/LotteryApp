import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberSquareComponent } from './number-square.component';

describe('NumberSquareComponent', () => {
  let component: NumberSquareComponent;
  let fixture: ComponentFixture<NumberSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NumberSquareComponent]
    });
    fixture = TestBed.createComponent(NumberSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
