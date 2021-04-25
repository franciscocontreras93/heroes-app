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

  constructor(private http:HttpClient
             ) { }


  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpoint}/heroes`);
  }
  getHeroId(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.endpoint}/heroes/${id}`);
  }

  getSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpoint}/heroes?q=${termino}&_limit=6`)
  }

  addHeroe(heroe:Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.endpoint}/heroes`,heroe)
  }
  editHero(heroe:Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.endpoint}/heroes/${heroe.id}`,heroe)
  }
  deleteHero(heroe:Heroe): Observable<Heroe>{
    this.bckHeroe(heroe).subscribe()
    return this.http.delete<Heroe>(`${this.endpoint}/heroes/${heroe.id}`)
  }
  
  bckHeroe(heroe:Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.endpoint}/heroes-backup`,heroe)
  }


}
