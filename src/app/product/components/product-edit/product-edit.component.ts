import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../models/product.model";

import {NgForm, NgModel} from "@angular/forms";
import { DataService } from "../../../shared/services/data.service";
import { Subscription } from "rxjs/Subscription";


export interface IEdit {
   isDirty:boolean; 
}


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, IEdit {

  @ViewChild("productForm")
  productForm: NgForm;

  @ViewChild("productName")
  productName: NgModel;

  constructor(private productService:ProductService,
              private route: ActivatedRoute,
              private dataService: DataService
            ) { }


  product: Product = new Product();

  subscription:Subscription;
  
  ngOnInit() {

    let id: any = this.route.snapshot.params["id"];
    console.log(id);
    if (id) {
        this.productService.getProduct(id)
        .subscribe ( (product: Product) => {
          this.product = product;
        })
    }


    this.subscription = this.dataService.saveSubject
    .subscribe ( (msg: any) => {
        this.saveProduct();
    })

 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get isDirty () {
    return this.productForm.dirty
  };

  saveProduct() {

    if (this.productForm.pristine) {
      alert("no changes found");
      return;
    }

    this.productService.saveProduct(this.product)
    .subscribe ( (savedProduct: Product) => {
      this.productForm.reset();
      
      this.product = savedProduct;
      console.log("saved ");
      alert("saved");
    })
  }

}
