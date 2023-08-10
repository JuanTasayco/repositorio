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
  enis: any;
  ngOnInit(): void {
    /* declaracion lenin  */
    /*     this.lenis = new Lenis();
    this.lenis.on('scroll', (e: Event) => {
      console.log(e);
    });
    const raf = (time: any) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf); */
    /* final de declaracion */
    /* declaracion de gsap (es necesario que esté después de lenin) */
    gsap.registerPlugin(ScrollTrigger);
  }

  constructor() {}

  ngAfterViewInit(): void {
    /* inicio de todo */
    const nav = document.querySelector('#nav');
    gsap.from(nav, {
      yPercent: -100,
      opacity: 0,
    });

    let tl = gsap.timeline({ duration: 1 });
    tl.timeScale(5);
    this.letterPresent.forEach((element) => {
      tl.from(element.nativeElement, {
        opacity: 0,
        yPercent: 100,
        ease: 'cine',
      });
    });
    let tl2 = gsap.timeline({ ease: 'steps' });
    this.letterName.forEach((element) => {
      tl2.from(element.nativeElement, {
        opacity: 0,
        yPercent: 100,
      });
    });
    tl2.from(this.parrafoTitle.nativeElement, {
      opacity: 0,
    });
  }
}
