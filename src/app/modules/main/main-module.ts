import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing-module';
import { Starter } from './starter/starter';
import { Dashboard } from './dashboard/dashboard';

@NgModule({
  declarations: [
    Dashboard,
    Starter
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
