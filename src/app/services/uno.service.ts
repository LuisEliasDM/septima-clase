import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnoService {

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.httpClient.get("https://rickandmortyapi.com/api/character")
  }

  getCharacter(name: string): Observable<any>{
    return this.httpClient.get("https://rickandmortyapi.com/api/character/?name=" + name)
  }
}
