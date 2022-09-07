import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(countries: Array<any>): Array<any> {
    if (!countries) { return []; }
    let sortedCountries = countries.map(x => x.name.common);
    return sortedCountries.sort();
  }

}
