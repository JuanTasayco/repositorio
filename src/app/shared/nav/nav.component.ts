import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { CommunicateLinksService } from '../services/communicate-links.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }
  ngAfterViewInit(): void {
    this.emitElementNav.emit(this.barraNavegacion.nativeElement);

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
