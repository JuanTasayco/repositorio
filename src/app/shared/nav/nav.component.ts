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

interface Routes {
  name: string;
  path: string;
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
    { name: 'Inicio', path: '/portfolio/myDescription' },
    { name: 'Mis Trabajos', path: '/portfolio/myProjects' },
    { name: 'Contactame', path: '/portfolio/contactMe' },
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

  moveToSection() {
    
  }

  constructor(private router: Router) {}
}
