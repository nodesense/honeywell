import {Pipe, PipeTransform} 
        from "@angular/core";

//filter pipe
// gt, lt  (price)
// products | filter:'price':'gt':300
// products | filter:'price':'lt':300

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    
    transform(items:any[], 
              fieldName:string,
              predicate:string,
              expected: any ) {


        if (!items || !fieldName || !predicate || !expected) {
            return items;
        }

        if (predicate == 'gt') {
            return items.filter ( (item: any) => item[fieldName] > expected)
        }


        if (predicate == 'eq') {
            return items.filter ( (item: any) => item[fieldName] == expected)
        }
        

        if (predicate == 'lt') {
            return items.filter ( (item: any) => item[fieldName] < expected)
        }

        return items;

    }
}

