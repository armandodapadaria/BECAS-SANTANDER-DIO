import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Isael',
        lasName: 'Oliveira',
        age: 19
      },
      {
        firstName: 'Maria',
        lasName: 'Silva',
        age: 28
      },
      {
        firstName: 'Joao',
        lasName: 'Pereira',
        age: 32
      },
      {
        firstName: 'Marcio',
        lasName: 'Santos',
        age: 40
      },
    ]
    return of(peopleArray);
  }
}
