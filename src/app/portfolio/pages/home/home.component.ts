import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import Lenis from '@studio-freight/lenis';

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
  @ViewChild('coverTitle') coverTitle!: ElementRef<HTMLElement>;
  @ViewChild('containerGrid') containerGrid!: ElementRef<HTMLElement>;
  @ViewChildren('figure') figuresIcon!: QueryList<ElementRef>;
  @ViewChildren('c') principalContainers!: QueryList<ElementRef>;

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  public infoProject: ProjectDescriptions[] = [];
  constructor(
    private dataService: HardDataService,
    private sharedModule: CommunicateLinksService
  ) {
    this.infoProject = dataService.hardDataProjects;
  }
}
