import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface NavElements {
  nameLink: string;
  divElement: HTMLElement;
}

@Injectable({
  providedIn: 'root',
})
export class CommunicateLinksService {
  navElement!: HTMLElement;

  private communicateNavLinks: Subject<NavElements> = new Subject();

  /* linksNames */
  public set setLinkName(navElement: NavElements) {
    this.communicateNavLinks.next(navElement);
  }
  public get getLinkName(): Observable<NavElements> {
    return this.communicateNavLinks.asObservable();
  }

  /* getNavReference */
  public setReferenceNavElement(element: HTMLElement) {
    this.navElement = element;
  }

  constructor() {}
}
