import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignIn } from '../components/sign-in/sign-in';
import { ConfirmEmail } from '../components/confirm-email/confirm-email';
import { ResetPassword } from '../components/reset-password/reset-password';
import { ForgotPassword } from '../components/forgot-password/forgot-password';
import { SignUp } from '../components/sign-up/sign-up';

const routes: Routes = [
  { path: 'login', component: SignIn },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: SignUp },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'confirm-email', component: ConfirmEmail },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
