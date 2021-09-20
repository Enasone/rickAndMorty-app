import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CharacterResult } from '../models/Character/character_result.interface';
import { LocationResult } from '../models/Locations/locations_result.interface';
import { CharacterService } from '../services/character.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-charecters',
  templateUrl: './charecters.component.html',
  styleUrls: ['./charecters.component.scss']
})
export class CharectersComponent implements OnInit {

  characters: CharacterResult[] = []
  pages: number = 1
  loader: boolean = false


  constructor(
    private character: CharacterService,
    private route: ActivatedRoute) {}


  ngOnInit() {


    this.route.queryParams.subscribe( (params: Params) => {
      if(params.page) {
          this.pages = +params.page
          this.character.pages(+params.page).subscribe( res => {
          this.characters = res.results
        })
      } else {
          this.character.getCharacters().subscribe( res => {
          this.characters = res.results
        })
      }

    })
  }

  resetName() {
    this.pages = 1
  }

  nextPage(number: number) {
    this.pages += 1
  }

  prevPage(number: number) {
    this.pages > 1? this.pages -=1 : this.pages = 1
  }
}


