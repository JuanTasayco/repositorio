import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

import { gsap } from 'gsap';
import { ProjectDescriptions } from '../interfaces/project-descriptions.interface';
import { HardDataService } from '../../services/hard-data.service';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-my-description',
  templateUrl: './my-description.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MyDescriptionComponent implements OnInit, AfterViewInit {
  @ViewChild('containerSection2') containerSection2!: ElementRef<HTMLElement>;
  @ViewChild('myDescription') containerDescription!: ElementRef<HTMLElement>;
  @ViewChild('myGraphic') containerGraphic!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    gsap.from(this.containerGraphic.nativeElement, {
      xPercent: '50',
      scrollTrigger: {
        trigger: this.containerSection2.nativeElement,
        scrub: true,
        start: '-40% bottom',
        end: 'center center',
      },
    });
    gsap.from(this.containerDescription.nativeElement, {
      xPercent: '-50',
      opacity: 0,
      scrollTrigger: {
        trigger: this.containerSection2.nativeElement,
        scrub: true,
        start: '-40% bottom',
        end: 'center center',
      },
    });
  }

  /* only data  */

  constructor() {}
}
