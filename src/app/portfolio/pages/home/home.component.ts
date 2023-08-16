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
import { HardDataService } from '../../services/hard-data.service';
import { ProjectDescriptions } from '../interfaces/project-descriptions.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('coverTitle') coverTitle!: ElementRef<HTMLElement>;
  @ViewChild('containerGrid') containerGrid!: ElementRef<HTMLElement>;
  @ViewChildren('figure') figuresIcon!: QueryList<ElementRef>;

  ngOnInit(): void {
    /*  const lenis = new Lenis();

    lenis.on('scroll', (e: any) => {});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); */
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

    this.figuresIcon.forEach((icon, index) => {
      /*  if (index == 4 || index == 6) {
        gsap.set(icon.nativeElement, {
          scale: 1.5,
        });
      } */
      gsap.from(icon.nativeElement, {
        scale: 3,
        duration: 1,
      });
    });

    const tlFigures = gsap.timeline({
      scrollTrigger: {
        trigger: this.containerGrid.nativeElement,
        scrub: 1,
        start: 'top top',
        end: '80% center',
      },
    });

    this.figuresIcon.forEach((icon) => {
      tlFigures.to(icon.nativeElement, {
        scale: 0.5,
      });
    });
  }
  public infoProject: ProjectDescriptions[] = [];
  constructor(private dataService: HardDataService) {
    this.infoProject = dataService.hardDataProjects;
  }
}
