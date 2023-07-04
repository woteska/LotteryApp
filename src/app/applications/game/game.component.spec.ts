import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteButtonComponent } from '../../common/components/delete-button/delete-button.component';
import {
  NumberSquaresContainerComponent
} from '../../common/components/number-squares-container/number-squares-container.component';
import { PlayButtonComponent } from '../../common/components/play-button/play-button.component';
import { RandomButtonComponent } from '../../common/components/random-button/random-button.component';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [
        RandomButtonComponent,
        DeleteButtonComponent,
        PlayButtonComponent,
        NumberSquaresContainerComponent
      ]
    });
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
