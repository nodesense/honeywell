import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../models/product.model";

import "rxjs/Rx";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService:ProductService,
              private route: ActivatedRoute) { }


  product: Product = new Product();

  ngOnInit() {

    let id: any = this.route.snapshot.params["id"];
    console.log(id);
    if (id) {
        this.productService.getProduct(id)
        .subscribe ( (product: Product) => {
          this.product = product;
        })
    }
  }


  saveProduct() {
    this.productService.saveProduct(this.product)
    .subscribe ( (savedProduct: Product) => {
      this.product = savedProduct;
      console.log("saved ");
    })
  }

}
