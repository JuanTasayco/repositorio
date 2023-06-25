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

  constructor() {}
}
