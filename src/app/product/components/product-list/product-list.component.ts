import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];

  //DI
  constructor(private productService:ProductService) {
    
   }


   fetchProducts() {
      this.productService
      .getProducts()
      .subscribe( (products:Product[]) => {
        this.products = products;
      })
   }

  ngOnInit() {
      this.fetchProducts();
  }

}
