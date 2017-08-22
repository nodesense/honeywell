import { Injectable, Inject } from '@angular/core';
import { Http, Response,
         Headers, RequestOptions
} from "@angular/http";
import { Observable } from "rxjs/Observable";

//import "rxjs/Rx"; //import all operator

import "rxjs/add/operator/map";

import "rxjs/add/operator/toPromise";

import "rxjs/add/operator/filter";


import { Product } from "../models/product.model";

@Injectable()
export class ProductService {

  constructor(@Inject("apiEndPoint") 
              private apiEndPoint:string,
              
              private http:Http

            ) { 

      console.log("product service created", this.apiEndPoint);

  }


  getProductsByPromise():Promise<Product[]> {
    return this.http
          .get(this.apiEndPoint + "/api/products")
          .map ( (response: Response) => {
              console.log(response);
              let products: Product[] = response.json();
      
     
              return products;
          })
        .toPromise();
  }


  getProducts():Observable<Product[]> {
    return this.http
          .get(this.apiEndPoint + "/api/products")
          .map ( (response: Response) => {
              console.log(response);
              let products: Product[] = response.json();
     
     
               
                products = products.map( (product: Product) => {
                  product.price = product.price * Math.random()
                  //FIXME: track by duplicate key
                  //product.id = 100;

                  return product;
                })
     
     
              return products;
          })
  }



      
  //DELETE /api/products/123

  deleteProduct(id): Observable<any> {
    return this.http
              .delete(this.apiEndPoint + "/api/products/" + id)
              .map ( (response: Response)=>{
                console.log(response);
                let data:any = response.json();
                 
                return data;
              })
  }

   //edit page
    getProduct(id):Observable<Product> {
       return this.http
              .get(this.apiEndPoint + "/api/products/" + id)
              .map ( (response: Response)=>{
                console.log(response);
                let product:Product = response.json();
                return product;
              })
    }


  saveProduct(product:Product):Observable<Product> {
     let headers:Headers = new Headers({
       "Content-Type" : "application/json"
     });

     let options: RequestOptions = new RequestOptions({
       headers: headers
     });

     let jsonData = JSON.stringify(product);
     
     if (product.id) {
        //update existing one
        //put method
        //PUT /api/products/1

        return this.http
              .put(this.apiEndPoint + "/api/products/" + product.id, 
                   jsonData, options)
              .map ( (response: Response)=>{
                console.log(response);
                let product:Product = response.json();
                return product;
              })
      } else {
        //create new one
        //post method


        return this.http
              .post(this.apiEndPoint + "/api/products" , 
                   jsonData, options)
              .map ( (response: Response)=>{
                console.log(response);
                let product:Product = response.json();
                return product;
              })
      }

  }




    searchProducts(q: string):Observable<Product[]> {
       return this.http
              .get(this.apiEndPoint + "/api/products?q=" + q)
              .map ( (response: Response)=>{
                console.log(response);
                let products:Product[] = response.json();
                
                products = products.map( (product: Product) => {
                  product.price = product.price * Math.random()
                  return product;
                })

                return products;
              })
    }

}
