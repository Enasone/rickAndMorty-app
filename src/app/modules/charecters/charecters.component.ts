import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  
  characters?: CharacterResult[]
  names?: CharacterResult[]
  locations?: LocationResult[]

  // species: any
  // type: any
  // genders: any
  pagTest: number = 1


  constructor(
    private character: CharacterService, 
    private location: LocationService,
    private router: Router,
    private route: ActivatedRoute) {}
  

  ngOnInit() {
    // this.character.getCharacters().subscribe( res => {
    //   this.characters = res.results

          // this.names = res.results
          // const spec = res.results.map( spec => spec.species)
          // this.species = spec.filter( (item, pos) => {
          //   return spec.indexOf(item) == pos;
          // })

          // const types = res.results.map( types => types.type)
          // this.type = types.filter( (item, pos) => {
          //   return types.indexOf(item) == pos && item != '' ;
          // })

          // const gender = res.results.map( genders => genders.gender)
          // this.genders = gender.filter( (item, pos) => {
          //   return gender.indexOf(item) == pos;
          // })
    // })

    this.route.queryParams.subscribe( (params: Params) => {
      // console.log(params)
      if(params.page) {
          this.pagTest = +params.page
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

  // searchName(name: string ) {
  //   this.character.getCharactersName(name).subscribe( res => {
  //     this.characters = res.results
  //   })
  // }

  resetName() {

  }

  nextPage(number: number) {
    
    
    this.route.queryParams.subscribe( (res: Params) => {
      if(+res.page) {

        this.pagTest = +res.page + 1
      } else {

        this.character.pages(++this.pagTest).subscribe( res => {
          this.characters = res.results
          this.names = res.results
        })
      }
    })
  }

  prevPage(number: number) {
    if (this.pagTest > 1) {

      this.route.queryParams.subscribe( (res: Params) => {
        if(+res.page) {

          this.pagTest = +res.page - 1
        } else {

          this.character.pages(++this.pagTest).subscribe( res => {
            this.characters = res.results
            this.names = res.results
          })
        }
      })

    } else {
      this.pagTest = 1
    }
  }
}


