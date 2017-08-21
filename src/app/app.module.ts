import {NgModule} from "@angular/core";


import {BrowserModule} 
    from "@angular/platform-browser";

    
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LikeComponent } from './components/like/like.component';

@NgModule({
    //prior dependencies/references
    imports: [
        BrowserModule,
        //SharedModule,
        //ProductModule,
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
    ]

})
export class AppModule {

}