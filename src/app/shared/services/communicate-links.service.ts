import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicateLinksService {
  constructor() {}

  private communicateNavLinks: BehaviorSubject<string> = new BehaviorSubject(
    'string'
  );

  public set setLinkName(nameLink: string) {
    this.communicateNavLinks.next(nameLink);
  }

  public get getLinkName(): Observable<string> {
    return this.communicateNavLinks.asObservable();
  }
}
