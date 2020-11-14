import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    NgxChartsModule,
    FormsModule
  ]
})
export class HomeModule { }
