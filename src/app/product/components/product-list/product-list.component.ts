import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { Subscription } from "rxjs/Subscription";

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

   trackById(product: Product, index: number) {
     return product.id;
   }

   subscription:Subscription;

   fetchProducts() {
      this.subscription = this.productService
      .getProducts()
      .subscribe( (products:Product[]) => {
        console.log("received products at list");
        this.products = products;
      })
   }

   //called before deleting component
   ngOnDestroy() {
    console.log("list destroy");
    
    this.subscription.unsubscribe();
   }



   fetchProducts2() {
      this.productService
      .getProductsByPromise()
      .then( (products:Product[]) => {
        this.products = products;
      })
   }

  ngOnInit() {
      this.fetchProducts();
  }

}
