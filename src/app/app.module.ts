import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appInitializerFactory } from './app-initializer-factory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInitializerService } from './common/services/user-initializer/user-initializer.service';
import { metaReducers, reducers } from './common/store';
import { UsersEffects } from './common/store/users/users.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true
        }
      }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [
        UserInitializerService
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
