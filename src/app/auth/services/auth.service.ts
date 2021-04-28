import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Users } from '../interfaces/auth.interfaces';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoind: string = environment.endpointHeroes
  private _user: Users | undefined


  get user():Users {
    return {...this._user!}
  }
 

  constructor(
    private http:HttpClient,
    private router:Router) { }

  login():Observable<Users> {

    return this.http.get<Users>(`${this.endpoind}/usuarios/1`).pipe(
      tap(resp => this._user = resp),
      tap(resp => localStorage.setItem('token', resp.id.toString()))
    )

  }


  logout(){
    this._user = undefined,
    this.router.navigate(['./auth/login'])
    localStorage.removeItem('token')

  }
  
  checkAuth():Observable<boolean> {

    if (!localStorage.getItem('token')) {
      
      return of(false);
      
    }
    return this.http.get<Users>(`${this.endpoind}/usuarios/1`).pipe(
      map( auth => {
        this._user = auth
        return true
      })
    )

    
  }
}
