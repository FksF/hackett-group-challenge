import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopulationResponse } from '../models/population.model';
import { VehicleOwnershipResponse } from '../models/vehicle-ownership.model';

@Injectable({ providedIn: 'root' })
export class DatausaService {
  constructor(private http: HttpClient) {}

  getPopulationData(): Observable<PopulationResponse> {
    return this.http.get<PopulationResponse>('https://datausa.io/api/data?drilldowns=State&measures=Population');
  }

  getVehicleOwnershipData(): Observable<VehicleOwnershipResponse> {
    return this.http.get<VehicleOwnershipResponse>('https://datausa.io/api/data?measure=Commute%20Means%20by%20Gender&geo=01000US&drilldowns=Vehicles%20Available');
  }
}
