import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Input } from '@angular/core';
import { gsap } from 'gsap';
import { ProjectDescriptions } from '../../interfaces/project-descriptions.interface';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: [],
})
export class ProjectDescriptionComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input('contenido') contentProjects: ProjectDescriptions[] = [];
  @ViewChildren('containerRef') containers!: QueryList<ElementRef>;
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }
  ngAfterViewInit(): void {
    this.containers.forEach((containerRef) => {
      gsap.set(containerRef.nativeElement, {
        opacity: 0,
        xPercent: 50,
      });
      gsap.to(containerRef.nativeElement, {
        opacity: 1,
        duration: 0.5,
        xPercent: 0,
        scrollTrigger: {
          trigger: containerRef.nativeElement,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      });
    });
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
