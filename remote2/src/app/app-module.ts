import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyFeatureModule } from './my-feature/my-feature.module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, MyFeatureModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
