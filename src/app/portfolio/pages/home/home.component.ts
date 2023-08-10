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
  lenis: any;
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
  /*   let tl = gsap.timeline({ duration: 0.5, ease: 'elastic' });
    tl.timeScale(4);
    this.letterPresent.forEach((element) => {
      tl.from(element.nativeElement, {
        yPercent: 100,
        timeScale: 5,
      });
    });
    let tl2 = gsap.timeline({ ease: 'steps' });
    this.letterName.forEach((element) => {
      tl2.from(element.nativeElement, {
        yPercent: 100,
      });
    }); */
  }
}
