import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import {
  CommunicateLinksService,
  NavElements,
} from 'src/app/shared/services/communicate-links.service';
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
  }
  navLinksElements!: NodeListOf<HTMLElement>;
  currentName: string = '';
  linkName: string = '';

  @Input() set idName(value: string) {
    this.currentName = value;
  }

  ngAfterViewInit(): void {
    this.navLinksElements = this.sharedService.linkNavElements;
    this.getObservableNameLink();
  }

  getObservableNameLink() {
    /* necesito esta lógica porque necesito el evento del nav al dar click, la directiva por si sola no obtiene el evento, solo la referencia del elemento oal que iré */
    this.sharedService.getLinkName.subscribe((data: NavElements) => {
      this.linkName = data.nameLink.toLocaleLowerCase();
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
    private sharedService: CommunicateLinksService
  ) {}
}
