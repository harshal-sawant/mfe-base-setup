import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Userdetails } from './userdetails/userdetails';


@NgModule({
  declarations: [
    Userdetails
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  bootstrap: [ Userdetails ]
})
export class UserModule { }

