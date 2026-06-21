import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from '../../main/dashboard/dashboard';
import { Layout } from '../components/layout/layout';

export const routes: Routes = [
  //  {
  //   path: '',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: Dashboard
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'dashboard',
  //       pathMatch: 'full'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
