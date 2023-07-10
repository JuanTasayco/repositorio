import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
@Directive({
  selector: '[appToScroll]',
})
export class ToScrollDirective implements AfterViewInit, OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
  }
  ngAfterViewInit(): void {
    gsap.to(window, {
      scrollTo: {
        y: this.el.nativeElement,
      },
      duration: 2,
    });
  }
}
