import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent<number>;
  let fixture: ComponentFixture<SquareComponent<number>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquareComponent]
    });
    fixture = TestBed.createComponent(SquareComponent<number>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
