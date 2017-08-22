import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';

import {RouterModule} from "@angular/router";
import { routes } from "./product.routing";

import {HttpModule} from "@angular/http";
import {FormsModule, 
        ReactiveFormsModule}  from "@angular/forms";
import { ProductService } from "./services/product.service";



import {environment} 
        from "../../environments/environment";

console.log("ENV", environment);


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductHomeComponent, 
                 ProductListComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent],

  //DI value, class, factory
  providers: [
    ProductService
  ]
})
export class ProductModule { }
