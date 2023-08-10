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

    /* final de declaracion */
    /* declaracion de gsap (es necesario que esté después de lenin) */
    gsap.registerPlugin(ScrollTrigger);
  }

  constructor() {}

  ngAfterViewInit(): void {}
}
