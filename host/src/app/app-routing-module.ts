import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      import('remote1/UserModule')
        .then((m) => m.UserModule)
        .catch((err) => console.error('Error lazy loading mfe1', err)),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('remote2/my-feature-module')
        .then((m) => m.MyFeatureModule)
        .catch((err) => console.error('Error lazy loading mfe2', err)),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
