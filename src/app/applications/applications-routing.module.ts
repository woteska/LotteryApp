import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from '../common/components/app-container/app-container.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: 'game',
        component: GameComponent
      },
      {
        path: '**',
        redirectTo: 'game'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule {
}
