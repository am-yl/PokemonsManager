import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {

  constructor(private http: HttpClient) { }

  generationGET(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/generation');
  }



  pokemonsFromGenGET(url: string) {
    return this.http.get(url);
  }

}
