import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TriggersService {
  private communicateButtonColor: BehaviorSubject<any> = new BehaviorSubject(
    Event
  );

  set setClickEventButton(action: any) {
    this.communicateButtonColor.next(action);
  }

  get getClickEventButton() {
    return this.communicateButtonColor.asObservable();
  }

  constructor() {}
}
