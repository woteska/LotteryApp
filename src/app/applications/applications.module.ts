import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppContainerComponent } from '../common/components/app-container/app-container.component';
import { GameComponent } from '../common/components/game/game.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { GameRoutingComponent } from './game-routing/game-routing.component';

@NgModule({
  declarations: [
    GameRoutingComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    AppContainerComponent,
    GameComponent,
    MatCardModule
  ]
})
export class ApplicationsModule {
}
