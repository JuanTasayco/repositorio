import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-horizontal-chart',
  templateUrl: './horizontal-chart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HorizontalChartComponent implements AfterViewInit {
  results: any[] = [
    {
      name: 'Typescript /  JS',
      value: 90,
    },
    {
      name: 'Angular',
      value: 90,
    },
    {
      name: 'Nest Js',
      value: 60,
    },
    {
      name: 'Docker',
      value: 50,
    },
    {
      name: 'Html',
      value: 90,
    },
    {
      name: 'CSS',
      value: 70,
    },
    {
      name: 'SASS',
      value: 60,
    },
    {
      name: 'Bootstrap',
      value: 90,
    },
  ];
  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Lenguajes';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Nivel';
  theme  = 'dark'
  colorScheme = 'nightLights';
  /* schemeType: string = 'linear'; */

  ngAfterViewInit(): void {
    if (window.innerWidth <= 1200) {
      this.view = [400, 200];
      this.cdr.detectChanges();
    }
  }

  hideChart(status: boolean) {
    this.view = status ? [400, 200] : [700, 400];
  }

  checkIsMobile() {
    this.hideChart(window.innerWidth <= 1200);
  }

  @HostListener('window:resize', [])
  onWindowsResize() {
    this.checkIsMobile();
  }

  constructor(private cdr: ChangeDetectorRef) {}
}

/*  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
 */
