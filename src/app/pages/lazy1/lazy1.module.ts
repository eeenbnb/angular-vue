import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazy1Component } from './lazy1.component';

@NgModule({
  imports: [
    CommonModule,
    Lazy1RoutingModule
  ],
  declarations: [Lazy1Component]
})
export class Lazy1Module { }
