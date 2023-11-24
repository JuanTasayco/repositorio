import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { CommunicateLinksService } from '../services/communicate-links.service';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Routes {
  name: string;
  path: string;
  nameSection: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements AfterViewInit {
  @ViewChild('nav') barraNavegacion!: ElementRef<HTMLElement>;
  @ViewChild('aHeaderLink') headerA!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    /* enviar links de referencia (small) */
    const navElement: NodeListOf<HTMLElement> =
      document.querySelectorAll('.Header-a');
    this.sharedService.setReferenceNavElement(navElement);

    const barraNavegacion = this.barraNavegacion.nativeElement;
    /* animación de cambio al bajar  */
    ScrollTrigger.create({
      scrub: 1,
      start: 'top top',
      toggleClass: {
        targets: barraNavegacion,
        className: 'bg-none',
      },
    });

    /* lógica para barra mobile (nav) */
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
      name: 'Proyectos',
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
