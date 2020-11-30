import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero'
import { HEROES } from './mock-heros'
import { MessagesService } from './messages.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messagesServices: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesServices.add('HeroService: fetched heroes');
    return of(HEROES)
  }

  
}
