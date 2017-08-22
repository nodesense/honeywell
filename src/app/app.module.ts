import {NgModule} from "@angular/core";


import {BrowserModule} 
    from "@angular/platform-browser";

    
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LikeComponent } from './components/like/like.component';
import { SharedModule } from "./shared/shared.module";


import {RouterModule} from "@angular/router";
import { routes } from "./app.routing";
import { ProductModule } from "./product/product.module";

import {environment} 
        from "../environments/environment";

console.log("ENV", environment);

@NgModule({
    //prior dependencies/references
    imports: [
        BrowserModule,
        SharedModule,

        RouterModule.forRoot(routes),
        ProductModule,
        //AuthModule
        //InventoryModule        
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        LikeComponent,
        //HomeComponent,
        //AboutComponent
    ],

    bootstrap: [
        AppComponent,
        //ChatAppComponent
    ],

    providers: [
        {
           provide: "apiEndPoint",
           useValue: environment.apiEndPoint 
        }
    ]

})
export class AppModule {

}