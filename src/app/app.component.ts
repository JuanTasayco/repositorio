import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit(): void {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);
    this.primengConfig.ripple = true;
  }
}
