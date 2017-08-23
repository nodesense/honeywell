import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {RouterModule} from "@angular/router";
import { FilterPipe } from "./pipes/filter.pipe";
import { DataService } from "./services/data.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, 
                 FooterComponent,
                 FilterPipe
                ],

  exports: [
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],

  providers: [
    DataService
  ]
})
export class SharedModule { }
