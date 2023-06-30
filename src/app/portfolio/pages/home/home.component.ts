import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private render: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  nav!: ElementRef;
  darkModeActive: boolean = false;

  getNavElement(element: ElementRef) {
    this.nav = element;
  }

  changeColor() {
    this.darkModeActive = !this.darkModeActive;
    if (this.darkModeActive) {
      this.render.removeClass(this.nav, 'lightMode');
      this.render.removeClass(this.document.body, 'lightMode');
      this.render.addClass(this.document.body, 'darkMode');
      this.render.addClass(this.nav, 'darkMode');
    } else {
      this.render.removeClass(this.nav, 'darkMode');
      this.render.removeClass(this.document.body, 'darkMode');
      this.render.addClass(this.document.body, 'lightMode');
      this.render.addClass(this.nav, 'lightMode');
    }
  }
}
