import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/characters.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API = 'https://rickandmortyapi.com/api/';
  constructor(private http: HttpClient) {}

  public getCharacters() {
    return this.http.get<Character[]>(`${this.API}/character`);
  }
}
