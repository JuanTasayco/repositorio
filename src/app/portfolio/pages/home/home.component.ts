import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import Lenis from '@studio-freight/lenis';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('coverTitle') coverTitle!: ElementRef<HTMLElement>;
  @ViewChild('containerGrid') containerGrid!: ElementRef<HTMLElement>;
  @ViewChildren('figure') figuresIcon!: QueryList<ElementRef>;
  lenis: any;
  ngOnInit(): void {
    /* declaracion lenin  */
    this.lenis = new Lenis({
      smoothWheel: true,
      duration: 0,
    });
    const raf = (time: any) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    /* declaracion de gsap (es necesario que esté después de lenin) */
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    /* animacion pin titleText */

    gsap.to(this.coverTitle.nativeElement, {
      scrollTrigger: {
        trigger: this.containerGrid.nativeElement,
        pin: this.coverTitle.nativeElement,
        end: '70%',
        pinSpacing: false,
        scrub: true,
      },
    });

    /* fin animacion pinTitleText */

    this.figuresIcon.forEach((icon) => {
      gsap.from(icon.nativeElement, {
        scale: 0.3,
      });
    });

    const tlFigures = gsap.timeline({
      scrollTrigger: {
        trigger: this.containerGrid.nativeElement,
        scrub: true,
        markers: true,
        start: 'top top',
        end: '80% center',
      },
    });

    this.figuresIcon.forEach((icon) => {
      tlFigures.to(icon.nativeElement, {
        scale: 0.2,
      });
    });
  }

  constructor() {}
}
