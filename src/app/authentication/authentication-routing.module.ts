import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  /**
   * Not implemented components and features...
   *  { path: 'sign-up', component: SignUpComponent },
   *  { path: 'forget-password', component: ForgetPasswordComponent },
   *  ...etc
   */
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
