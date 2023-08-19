import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

import { gsap } from 'gsap';
import { ProjectDescriptions } from '../interfaces/project-descriptions.interface';
import { HardDataService } from '../../services/hard-data.service';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-my-description',
  templateUrl: './my-description.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MyDescriptionComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {}

  /* only data  */

  constructor() {}
}
