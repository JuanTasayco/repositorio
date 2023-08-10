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

import { gsap } from 'gsap';
import { ProjectDescriptions } from '../interfaces/project-descriptions.interface';
import { HardDataService } from '../../services/hard-data.service';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-my-description',
  templateUrl: './my-description.component.html',
})
export class MyDescriptionComponent implements OnInit, AfterViewInit {
  @ViewChildren('iconDev') iconsDev!: QueryList<ElementRef>;
  @ViewChildren('principalText,principalTitle')
  mainText!: QueryList<ElementRef>;
  @ViewChild('circleScroll') circleScroll!: ElementRef<HTMLElement>;
  @ViewChild('appToScroll') containerScroll!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.getSizeViewPort();
    /* animaciones del texto */
    this.mainText.forEach((result) => {
      gsap.set(result.nativeElement, {
        xPercent: -100,
        opacity: 0,
      });
      gsap.to(result.nativeElement, {
        duration: 1,
        xPercent: 0,
        opacity: 1,
      });
    });

    let tl = gsap.timeline({ duration: 0.1 });
    this.iconsDev.forEach((result) => {
      tl.from(result.nativeElement, {
        opacity: 0,
      });
    });
    tl.timeScale(3);

    /* animaciones del boton scroll */

    /* gsap.fromTo(
      this.circleScroll.nativeElement,
      {
        yPercent: -150,
      },
      {
        duration: 1,
        yPercent: 0,
        opacity: 0,
        repeat: -1,
        yoyo: false,
      }
    );

    
    ScrollTrigger.create({
      trigger: this.containerScroll.nativeElement,
      start: 'top center',
      end: 'center center',
      markers: true,
      onEnter: () => {
        console.log('estoy en enter');
      },
      onLeaveBack: () => {
        console.log('llegué abajo');
      },
    }); */
  }

  /* only data  */
  public infoProject: ProjectDescriptions[] = [];

  /*   hideScrollButton(status: boolean) {
    const buttonScroll = document.querySelector(
      '.Principal-scroll--container'
    ) as HTMLElement;
    buttonScroll.hidden = status;
  } */

  @HostListener('window:resize', [])
  getSizeViewPort() {
    /* this.hideScrollButton(window.innerWidth <= 1290); */
  }

  constructor(private dataService: HardDataService) {
    /* obtener data en duro del servicio hardData, esta info se envía al component */
    this.infoProject = dataService.hardDataProjects;
  }
}
