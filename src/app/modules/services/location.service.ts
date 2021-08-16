import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Locations } from '../models/Locations/locations.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {}

  public getLocations(): Observable<Locations> {
    return this.http.get<any>(`${environment.backendUrl}/location`)
  }
}
