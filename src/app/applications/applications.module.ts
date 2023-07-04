import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeleteButtonComponent } from '../common/components/delete-button/delete-button.component';
import {
  NumberSquaresContainerComponent
} from '../common/components/number-squares-container/number-squares-container.component';
import { PlayButtonComponent } from '../common/components/play-button/play-button.component';
import { RandomButtonComponent } from '../common/components/random-button/random-button.component';
import { SquareComponent } from '../common/components/square/square.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SquareComponent,
    NumberSquaresContainerComponent,
    MatButtonModule,
    MatIconModule,
    RandomButtonComponent,
    DeleteButtonComponent,
    PlayButtonComponent
  ]
})
export class ApplicationsModule {
}
