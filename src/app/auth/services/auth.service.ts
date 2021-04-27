import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Users } from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    private http:HttpClient
  ) { }

  login():Observable<Users> {

    return this.http.get<Users>(`${this.endpoind}/usuarios/1`).pipe(
      tap(resp => this._user = resp)
    )

  }
}
