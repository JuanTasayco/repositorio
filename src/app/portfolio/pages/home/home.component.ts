import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

import { gsap } from 'gsap';
import { HardDataService } from '../../services/hard-data.service';
import { ProjectDescriptions } from '../interfaces/project-descriptions.interface';
import { CommunicateLinksService } from 'src/app/shared/services/communicate-links.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    /* contenedores para cambiar color de nav */
    const navItems: NodeListOf<HTMLElement> = this.sharedModule.linkNavElements;
  }
  public infoProject: ProjectDescriptions[] = [];
  constructor(
    private dataService: HardDataService,
    private sharedModule: CommunicateLinksService
  ) {
    this.infoProject = dataService.hardDataProjects;
  }
}
