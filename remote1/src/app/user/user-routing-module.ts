import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Userdetails } from './userdetails/userdetails';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: Userdetails,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
