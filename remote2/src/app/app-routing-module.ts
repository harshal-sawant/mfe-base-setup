import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-feature',
    pathMatch: 'full',
  },
  {
    path: 'my-feature',
    loadChildren: () =>
      import('./my-feature/my-feature.module').then((m) => m.MyFeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
