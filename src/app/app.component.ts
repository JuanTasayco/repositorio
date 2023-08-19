import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { DOCUMENT } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private primengConfig: PrimeNGConfig
  ) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
