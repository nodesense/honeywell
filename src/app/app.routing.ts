//Route configuration

import {Routes} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";

export const routes:Routes = [
    {
        path: '', //default to home //lh:4200/
        component: HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    }
];