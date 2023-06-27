import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule {
}
