import {
  AfterViewInit,
  ChangeDetectionStrategy,
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
import { CommunicateLinksService } from 'src/app/shared/services/communicate-links.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('coverTitle') coverTitle!: ElementRef<HTMLElement>;
  @ViewChild('containerGrid') containerGrid!: ElementRef<HTMLElement>;
  @ViewChildren('figure') figuresIcon!: QueryList<ElementRef>;
  @ViewChildren('c') principalContainers!: QueryList<ElementRef>;

  ngOnInit(): void {}

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

    /* animacion de figuras */
    /* al iniciar */
    const tlPresentation = gsap.timeline();
    const figures = document.querySelectorAll('.Home-gridItem');
    tlPresentation
      .from(figures, {
        scale: 3,
      })
      .to(figures, {
        rotateX: 360,
      });

    /* al bajar */
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

    /* fin de al bajar */
    /* fin animaciones figuras */

    /* contenedores para cambiar color de nav */
    const navItems: NodeListOf<HTMLElement> = this.sharedModule.linkNavElements;
    console.log(navItems[0]);
    this.principalContainers.forEach((element, index) => {
      gsap.to(element.nativeElement, {
        scrollTrigger: {
          trigger: element.nativeElement,
          markers: true,
          start: 'top 2%',
          end: "bottom 2%",
          scrub: 1,
          toggleClass: {
            targets: navItems[index],
            className: 'Home-activeColor',
          },
        },
      });
    });
  }
  public infoProject: ProjectDescriptions[] = [];
  constructor(
    private dataService: HardDataService,
    private sharedModule: CommunicateLinksService
  ) {
    this.infoProject = dataService.hardDataProjects;
  }
}
