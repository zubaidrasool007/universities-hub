import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getUniversities(country: string): Observable<any> {
    const universitiesUrl = `${environment.universitesDomain}/search?country=${country}`;
    return this.httpClient.get(universitiesUrl);
  }

}
