import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PieChartComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [PieChartComponent],
  providers: [

  ],
})
export class ChartsModule {}
