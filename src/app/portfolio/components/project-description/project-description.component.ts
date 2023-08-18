import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectDescriptions } from '../../pages/interfaces/project-descriptions.interface';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [],
})
export class ProjectDescriptionComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input('contenido') contentProjects: ProjectDescriptions[] = [];
  @ViewChildren('containerRef') containers!: QueryList<ElementRef>;
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin();
  }
  ngAfterViewInit(): void {
    this.containers.forEach(
      ({ nativeElement: elemento }: ElementRef, index) => {
        gsap.from(elemento, {
          opacity: 0,
          xPercent: index % 2 == 0 ? 50 : -50,
          scrollTrigger: {
            trigger: elemento,
            start: 'top 90%',
            end: `+=${elemento.clientHeight}`,
            toggleActions: 'play none none reverse',
            scrub: true,
          },
        });
      }
    );
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
