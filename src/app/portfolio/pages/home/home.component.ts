import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Scroll } from '@angular/router';
import Lenis from '@studio-freight/lenis';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('letterPresent') letterPresent!: QueryList<ElementRef>;
  @ViewChildren('letterName') letterName!: QueryList<ElementRef>;
  @ViewChild('parrafoTitle') parrafoTitle!: ElementRef<HTMLElement>;
  @ViewChild('homeContainer') homeContainer!: ElementRef<HTMLElement>;
  lenis: any;
  ngOnInit(): void {
    /* declaracion lenin  */
    this.lenis = new Lenis({
      lerp: 2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: any) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    /* final de declaracion */
    /* declaracion de gsap (es necesario que esté después de lenin) */
    gsap.registerPlugin(ScrollTrigger);
  }

  constructor() {}

  ngAfterViewInit(): void {
    /* INICIO ANIMACIONES */
    const nav = document.querySelector('#nav');
    gsap.from(nav, {
      yPercent: -100,
      opacity: 0,
    });

    let tl = gsap.timeline({ duration: 1 });
    tl.timeScale(8);
    this.letterPresent.forEach((element, index) => {
      tl.from(element.nativeElement, {
        duration: 1,
        opacity: 1,
        y: '100%',
        ease: 'power4.out',
      });
    });

    let tl2 = gsap.timeline({});
    this.letterName.forEach((element, index) => {
      tl2.from(element.nativeElement, {
        opacity: 0,
        yPercent: 100,
      });
    });

    tl2.fromTo(
      this.parrafoTitle.nativeElement,
      {
        opacity: 0,
        y: '-100%',
      },
      {
        opacity: 1,
        y: '0%',
        duration: 1,
        ease: 'power1.out',
      }
    );

    /* FIN ANIMACIONES INICIO */
    const continueArrow = document.querySelector('#continueArrow');
    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: this.homeContainer.nativeElement,
        markers: true,
        start: 'top top',
        end: 'center',
        scrub: true,
        toggleActions: 'play none none none',
      },
    });

    timeline3.to(continueArrow, {
      y: '-100%',
    });

    this.letterPresent.forEach((element) => {
      timeline3.to(element.nativeElement, {
        opacity: 0,
        ease: 'power3.out',
        y: '-105%',
        duration: 1,
      });
    });

    this.letterName.forEach((element) => {
      timeline3.to(element.nativeElement, {
        opacity: 0,
        ease: 'power3.out',
        y: '-105%',
        duration: 1,
      });
    });
  }
}
