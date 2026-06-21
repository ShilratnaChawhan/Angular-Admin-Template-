import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './modules/shared/components/layout/layout';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/authentication/module/authentication-module').then(m => m.AuthenticationModule)
  },
  {
    path: 'main',
    component: Layout,
    children: [
      {
      path: '',
      loadChildren: () =>
        import('./modules/main/main-module')
          .then(m => m.MainModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
