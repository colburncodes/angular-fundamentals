import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedComponent } from './account/not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customers',
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customer/customer.module').then((mod) => mod.CustomerModule),
  },
  {
    path: 'not-authorized',
    pathMatch: 'full',
    component: NotAuthorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
