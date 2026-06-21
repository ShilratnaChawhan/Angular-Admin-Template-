import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Starter } from './starter/starter';

const routes: Routes = [
   { path: 'dashboard', component: Dashboard },
     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
   { path: 'starter', component: Starter }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
