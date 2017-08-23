import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { Product } from "../../models/product.model";

import "rxjs/add/observable/of";
import { Observable } from "rxjs/Observable";
import { ProductService } from "../../services/product.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { APP_BASE_HREF } from '@angular/common';
import { fakeAsync } from "@angular/core/testing";


let product = new Product();
product.id = 1;
product.name = 'Phone 1';

let testProducts:Product[] = [];
testProducts.push(product);

 export class ProductServiceStub {
  getProducts():Observable<Product[]> {
     return Observable.of(testProducts);
  }
 }

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let serviceStub: ProductServiceStub;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [
        {
          provide: ProductService,
          useClass: ProductServiceStub
        },

        {provide: APP_BASE_HREF, 
         useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should resolve test data', fakeAsync(() => {


    TestBed.overrideComponent(ProductListComponent, {
      set: {
        template: `<li *ngFor="let product of products">
                     {{product.name}} 
                  </li>`
      }});
      
      TestBed.compileComponents()
      .then ( () => {
        fixture = TestBed.createComponent(ProductListComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();


        serviceStub = fixture.debugElement.injector.get(ProductService);

        const spy = spyOn(serviceStub, 'getProducts').and.returnValue(
          Observable.of(testProducts)
        );

        component.ngOnInit();
        fixture.detectChanges();

        expect(component.products).toEqual(testProducts);
        expect(spy.calls.any()).toEqual(true);

        fixture.whenStable().then(() => {
          const compiled = fixture.debugElement.nativeElement;
          console.log("Inner html ", compiled.innerHTML);
          //expect(compiled.querySelector('li').innerText).toEqual('Product 1');
          expect(compiled.textContent).toContain ('Phone 1');
        });
      })
     
    
 
  }));
  
});
