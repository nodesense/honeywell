import {Routes} from "@angular/router";
import { ProductHomeComponent } from "./components/product-home/product-home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductSearchComponent } from "./components/product-search/product-search.component";
import { CanEditGuard } from "./guards/can-edit.guard";
import { SaveAlertGuard } from "./guards/save-alert.guard";

export const routes = [
    {
        path: "products",
        component: ProductHomeComponent,

        children: [
            {
                path: 'list', //products/list
                component: ProductListComponent
            },

            {
                path: 'create',
                component: ProductEditComponent,
                canActivate: [CanEditGuard]
            },

            {
                path: 'edit/:id',
                component: ProductEditComponent,
                canActivate: [CanEditGuard],
                canDeactivate: [SaveAlertGuard]
            },

            {
                path: 'search',
                component: ProductSearchComponent
            }
        ]
    }
]