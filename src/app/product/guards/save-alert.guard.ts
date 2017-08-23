import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IEdit } from "../components/product-edit/product-edit.component";

@Injectable()
export class SaveAlertGuard implements CanDeactivate<IEdit> {
  canDeactivate(target: IEdit): Observable<boolean> | Promise<boolean> | boolean {
     if (!target.isDirty) //no changes
        return true;
     
     let result = window.confirm("want to leave without saving?");

     //return true/false
     return result;

  }
}
