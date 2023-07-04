import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameRoutingComponent } from './game-routing/game-routing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'game',
        component: GameRoutingComponent
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
