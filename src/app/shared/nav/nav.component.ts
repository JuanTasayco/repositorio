import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { CommunicateLinksService } from '../services/communicate-links.service';
import { TriggersService } from '../../portfolio/services/triggers.service';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';
interface Routes {
  name: string;
  path: string;
  nameSection: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements AfterViewInit, OnInit {
  @Output() emitElementNav: EventEmitter<any> = new EventEmitter();
  @ViewChild('nav') barraNavegacion!: ElementRef<HTMLElement>;
  @ViewChild('aHeaderLink') headerA!: ElementRef<HTMLElement>;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.emitElementNav.emit(this.barraNavegacion.nativeElement);
    this.gsapToggleClassNav(this.headerA.nativeElement, 'Header-aRed');

    const navElement: any = document.querySelector('.Header');
    this.sharedService.setReferenceNavElement(navElement);
  }

  gsapToggleClassNav(elemento: HTMLElement, clase: string) {
    gsap.to(this.barraNavegacion.nativeElement, {
      scrollTrigger: {
        start: 'top top',
        markers: true,
        scrub: true,
        toggleClass: {
          className: clase,
          targets: [elemento],
        },
        /* toggleActions: 'play none none none' */
      },
    });
  }

  isActive(path: string): boolean {
    const isActiveOptions: IsActiveMatchOptions = {
      paths: 'exact',
      matrixParams: 'exact',
      queryParams: 'exact',
      fragment: 'exact',
    };

    return this.router.isActive(path, isActiveOptions);
  }

  moveToSection(routeName: string, element: HTMLElement) {
    this.sharedService.setLinkName = {
      nameLink: routeName,
      divElement: element,
    };
  }

  constructor(
    private router: Router,
    private sharedService: CommunicateLinksService
  ) {}

  /* hard data */
  myRoutes: Routes[] = [
    { name: 'Inicio', path: '/portfolio/myDescription', nameSection: 'inicio' },
    {
      name: 'Conoceme',
      path: '/portfolio/conoceme',
      nameSection: 'descripcion',
    },
    {
      name: 'Mis proyectos',
      path: '/portfolio/myProjects',
      nameSection: 'trabajos',
    },

    {
      name: 'Contactame',
      path: '/portfolio/contactMe',
      nameSection: 'contactame',
    },
  ];
}
