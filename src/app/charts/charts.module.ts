import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HorizontalChartComponent } from './horizontal-chart/horizontal-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HorizontalChartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [HorizontalChartComponent],
})
export class ChartsModule {}
