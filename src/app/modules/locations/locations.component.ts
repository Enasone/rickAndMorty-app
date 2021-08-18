import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocationInfo } from '../models/Locations/locations_info.interface';
import { LocationResult } from '../models/Locations/locations_result.interface';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations?: LocationResult[]
  locationInfo?: LocationInfo

  pages: number = 1

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe( (params: Params) => {
      if(params.page) {
          this.pages = +params.page
          this.locationService.locationPages(+params.page).subscribe( res => {
          this.locations = res.results
          this.locationInfo = res.info
        })
      } else {
          this.locationService.getLocations().subscribe( res => {
          this.locations = res.results
          this.locationInfo = res.info
        })
      }
      
    })
  }

  prevPage(page: number) {
    this.pages > 1? this.pages -=1 : this.pages = 1
  }

  nextPage(page: number) {
    this.pages += 1
    console.log(this.locationInfo)
  }

  reset() {
    this.pages = 1

  }

}
