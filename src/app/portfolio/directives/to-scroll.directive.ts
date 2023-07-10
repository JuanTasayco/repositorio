import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { CommunicateLinksService } from 'src/app/shared/services/communicate-links.service';
@Directive({
  selector: '[appToScroll]',
})
export class ToScrollDirective implements AfterViewInit, OnInit {
  /* 1.obtener el valor del input (idName que hara match con el navlink) 
     2.ngOnInit permitirá disparar la funcion de lógica donde obtengo el linkName del componente nav
     3.dentro de getObservableSharing hago las validaciones para ejecutar el código scroll solo cuando hay match */
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    this.getObservableNameLink();
  }

  currentName: string = '';
  linkName: string = '';

  @Input() set idName(value: string) {
    this.currentName = value;
  }

  ngAfterViewInit(): void {}

  getObservableNameLink() {
    this.sharedModule.getLinkName.subscribe((data) => {
      this.linkName = data.toLocaleLowerCase();
      if (this.currentName == this.linkName) {
        gsap.to(window, {
          scrollTo: {
            y: this.el.nativeElement,
          },
          duration: 0.1,
        });
      }
    });
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private sharedModule: CommunicateLinksService
  ) {}
}
