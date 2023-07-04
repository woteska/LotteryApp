import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AppContainerComponent } from '../../common/components/app-container/app-container.component';
import { GameComponent } from '../../common/components/game/game.component';
import { GameRoutingComponent } from './game-routing.component';

describe('GameRoutingComponent', () => {
  let component: GameRoutingComponent;
  let fixture: ComponentFixture<GameRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameRoutingComponent],
      imports: [
        AppContainerComponent,
        MatCardModule,
        GameComponent,
        StoreModule
      ],
      providers: [
        provideMockStore()
      ]
    });
    fixture = TestBed.createComponent(GameRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
