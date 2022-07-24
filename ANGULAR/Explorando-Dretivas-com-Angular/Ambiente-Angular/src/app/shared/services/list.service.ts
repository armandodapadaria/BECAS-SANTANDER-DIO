import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiURL = 'https://rickandmortyapi.com/api/character'

  constructor(private httpClient: HttpClient) { }

  getList():Observable<any> {
    return this.httpClient.get<any>(this.apiURL)
  }
}
