import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { Subscription } from "rxjs/Subscription";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];

  fieldName:string = "price";
  predicate: string = "gt";
  value: any = "";
 
  //DI
  constructor(private productService:ProductService,
              private dataService:DataService
        ) {
    
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
    this.subscription2.unsubscribe();
    
   }


 

   offeredProducts:Product[] = [];

   subscription2:Subscription;
   
  ngOnInit() {
      this.fetchProducts();

     this.subscription2 = this.dataService.historySubject
      .subscribe ( (product: Product) => {
        this.offeredProducts.push(product);
      })

  }

}
