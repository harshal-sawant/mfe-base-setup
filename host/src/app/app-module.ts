import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: 'AUTH_SERVICE',
      useExisting: AuthService,
    },
  ],
  bootstrap: [App],
})
export class AppModule {}
