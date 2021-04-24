import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const params:HttpParams[] = [];



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private endpoint:string = environment.endpointHeroes;

  constructor(private http:HttpClient) { }


  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpoint}/heroes`);
  }
  getHeroId(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.endpoint}/heroes/${id}`);
  }

  getSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpoint}/heroes?q=${termino}&_limit=6`)
  }
}
