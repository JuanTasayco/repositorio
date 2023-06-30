import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DOCUMENT } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(
    private render: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private primengConfig: PrimeNGConfig
  ) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
