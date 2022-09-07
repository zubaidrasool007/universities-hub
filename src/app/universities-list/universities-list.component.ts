import { Component, OnInit } from '@angular/core';
import { DataService } from '../universities.service';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent implements OnInit {

  public selectedCountry = new FormControl('Pakistan');
  public isLoading: boolean = false;
  public countries: Array<any> = [];
  public universtiesList: Array<any> = [];
  public universtiesDisplayList: Array<any> = [];
  public filteredOptions: Observable<any> | undefined;
  displayedColumns: string[] = ['name', 'domains', 'state-province', 'web_pages'];

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.getCountriesList();
    this.getUniversitiesList();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(option => option.name.common.toLowerCase().includes(filterValue));
  }

  getCountriesList() {
    this.dataService.getCountries().subscribe(countries => {
      this.countries = countries;
      this.filteredOptions = this.selectedCountry.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  getUniversitiesList() {
    this.isLoading = true;
    this.dataService.getUniversities(this.selectedCountry.value as string)
      .subscribe(res => {
        this.universtiesList = res;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
      });
  }

}
