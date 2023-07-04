import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameValidityComponent } from './game-validity.component';

describe('GameValidityComponent', () => {
  let component: GameValidityComponent;
  let fixture: ComponentFixture<GameValidityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GameValidityComponent]
    });
    fixture = TestBed.createComponent(GameValidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
