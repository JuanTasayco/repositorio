import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { CommunicateLinksService } from '../services/communicate-links.service';

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
export class NavComponent implements AfterViewInit {
  @Output() emitElementNav: EventEmitter<any> = new EventEmitter();
  @ViewChild('nav') navElement!: ElementRef;

  ngAfterViewInit(): void {
    this.emitElementNav.emit(this.navElement.nativeElement);
  }

  myRoutes: Routes[] = [
    { name: 'Inicio', path: '/portfolio/myDescription', nameSection: 'inicio' },
    {
      name: 'Mis Trabajos',
      path: '/portfolio/myProjects',
      nameSection: 'trabajos',
    },
    {
      name: 'Contactame',
      path: '/portfolio/contactMe',
      nameSection: 'contactame',
    },
  ];

  isActive(path: string): boolean {
    const isActiveOptions: IsActiveMatchOptions = {
      paths: 'exact',
      matrixParams: 'exact',
      queryParams: 'exact',
      fragment: 'exact',
    };

    return this.router.isActive(path, isActiveOptions);
  }

  moveToSection(routeName: string) {
    this.sharedService.setLinkName = routeName;
  }

  constructor(
    private router: Router,
    private sharedService: CommunicateLinksService
  ) {}
}
