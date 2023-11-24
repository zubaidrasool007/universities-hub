import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/universities.service';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent implements OnInit {

  public selectedCountry = new FormControl('United States');
  public isLoading: boolean = false;
  public countries: Array<any> = [];
  public universtiesList: Array<any> = [];
  public universtiesDisplayList: Array<any> = [];
  public filteredOptions: Observable<any> | undefined;
  public recordsPerPage: number = 20;
  private currentPage: number = 1;
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
    this.universtiesList = this.universtiesDisplayList = [];
    this.dataService.getUniversities(this.selectedCountry.value as string)
      .subscribe(res => {
        this.universtiesList = res;
        this.isLoading = false;
        this.setUniversitiesToDisplay();
      }, error => {
        this.isLoading = false;
      });
  }

  currentPageChanged(page: number) {
    this.currentPage = page;
    this.setUniversitiesToDisplay();
  }

  setUniversitiesToDisplay() {
    const lastVisitedPage = this.recordsPerPage * (this.currentPage - 1);
    this.universtiesDisplayList = this.universtiesList.slice(lastVisitedPage, this.recordsPerPage * this.currentPage);
  }

}
