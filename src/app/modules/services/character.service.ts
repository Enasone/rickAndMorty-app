import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Character } from '../models/Character/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<Character> {
    return this.http.get<any>(`${environment.backendUrl}/character`);
  }

  // public getCharactersName( name: string): Observable<Character> {
  //   return this.http.get<any>(`${environment.backendUrl}/character/?name=${name}`);
  // }

  public pages( page: number): Observable<Character> {
    return this.http.get<any>(`${environment.backendUrl}/character/?page=${page}`);
  }


  // public getLocations(): Observable<>

}
