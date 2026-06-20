import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing-module';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout/layout';
import { Preloader } from '../components/preloader/preloader';
import { Sidebar } from '../components/sidebar/sidebar';
import { Theme } from '../components/theme/theme';


@NgModule({
  declarations: [
    Layout,
    Header,
    Footer,
    Sidebar,
    Preloader,
    Theme
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
