import { Injectable, Inject } from '@angular/core';
import { Http, Response,
         Headers, RequestOptions
} from "@angular/http";
import { Observable } from "rxjs/Observable";

//import "rxjs/Rx"; //import all operator

import "rxjs/add/operator/map";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {

  constructor(@Inject("apiEndPoint") 
              private apiEndPoint:string,
              
              private http:Http

            ) { 

      console.log("product service created", this.apiEndPoint);

  }

  getProducts():Observable<Product[]> {
    return this.http
          .get(this.apiEndPoint + "/api/products")
          .map ( (response: Response) => {
              console.log(response);
              let products: Product[] = response.json();
              return products;
          })
  }



}
