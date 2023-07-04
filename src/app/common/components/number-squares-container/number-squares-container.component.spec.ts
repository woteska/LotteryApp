import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberSquaresContainerComponent } from './number-squares-container.component';

describe('NumberSquaresContainerComponent', () => {
  let component: NumberSquaresContainerComponent;
  let fixture: ComponentFixture<NumberSquaresContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NumberSquaresContainerComponent]
    });
    fixture = TestBed.createComponent(NumberSquaresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
