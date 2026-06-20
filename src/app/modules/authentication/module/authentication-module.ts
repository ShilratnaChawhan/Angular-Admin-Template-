import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing-module';
import { ConfirmEmail } from '../components/confirm-email/confirm-email';
import { ForgotPassword } from '../components/forgot-password/forgot-password';
import { ResetPassword } from '../components/reset-password/reset-password';
import { SignIn } from '../components/sign-in/sign-in';
import { SignUp } from '../components/sign-up/sign-up';


@NgModule({
  declarations: [
    SignIn,
    SignUp,
    ForgotPassword,
    ResetPassword,
    ConfirmEmail
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
