import { Component, OnInit } from '@angular/core';
import { DataService } from '../universities.service';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent implements OnInit {

  public selectedCountry: string;
  public countries: Array<string> = [];
  public universtiesList: Array<any> = [];
  public universtiesDisplayList: Array<any> = [];

  constructor(
    private dataService: DataService
  ) {
    this.selectedCountry = 'Pakistan';
  }
  
  ngOnInit(): void {
    this.getUniversitiesList();
  }

  getCountriesList() {
  }

  getUniversitiesList() {
    this.dataService.getUniversities(this.selectedCountry)
    .subscribe(res => {
      this.universtiesList = res;
      console.log('Universities List => ', this.universtiesList);
    });
  }

}
