import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { CommunicateLinksService } from '../services/communicate-links.service';
import { TriggersService } from '../../portfolio/services/triggers.service';

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
  @ViewChild('nav') navElement!: ElementRef;
  @ViewChildren('aLink') aLinksNav!: QueryList<any>;
  activeModeDarkNav: boolean = true;

  ngAfterViewInit(): void {
    this.emitElementNav.emit(this.navElement.nativeElement);

    this.triggerService.getClickEventButton.subscribe(() => {
      this.activeModeDarkNav = !this.activeModeDarkNav;

      const className = 'gold';

      /* en base al boolean activeMode.. se aplica addClass or remove */
      /* recorriendo  */
      this.aLinksNav.forEach((result: ElementRef) => {
        this.renderer[this.activeModeDarkNav ? 'addClass' : 'removeClass'](
          result.nativeElement,
          className
        );
      });
    });
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

  /* @ViewChild('aLink') aLinkNav!: ElementRef; */

  ngOnInit(): void {}

  constructor(
    private router: Router,
    private sharedService: CommunicateLinksService,
    private triggerService: TriggersService,
    private renderer: Renderer2
  ) {}
}
