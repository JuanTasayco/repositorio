import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

import { gsap } from 'gsap';
import { ProjectDescriptions } from '../../interfaces/project-descriptions.interface';
import { HardDataService } from '../../services/hard-data.service';

@Component({
  selector: 'app-my-description',
  templateUrl: './my-description.component.html',
  styleUrls: [],
})
export class MyDescriptionComponent implements OnInit, AfterViewInit {
  @ViewChildren('iconDev') iconsDev!: QueryList<ElementRef>;
  @ViewChildren('principalText,principalTitle')
  mainText!: QueryList<ElementRef>;
  @ViewChild('circleScroll') circleScroll!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
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

    gsap.fromTo(
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
  }

  /* only data  */
  public infoProject: ProjectDescriptions[] = [];

  ngOnInit(): void {}

  constructor(private dataService: HardDataService) {
    /* obtener data en duro del servicio hardData, esta info se envía al component */
    this.infoProject = dataService.hardDataProjects;
  }
}
