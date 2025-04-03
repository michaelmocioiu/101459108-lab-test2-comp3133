import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private api_url = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.api_url}/characters`);
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.api_url}/characters/house/${house}`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.api_url}/character/${id}`);
  }
}