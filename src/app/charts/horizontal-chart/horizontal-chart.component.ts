import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-horizontal-chart',
  templateUrl: './horizontal-chart.component.html',
  styleUrls: [],
})
export class HorizontalChartComponent {
  results?: any[] = [
    {
      "name": "Typescript /  JS",
      "value": 90,

    },
    {
      "name": "Angular",
      "value": 90,

    },
    {
      "name": "Nest Js",
      "value": 60,

    },
    {
      "name": "Docker",
      "value": 50,
    },
    {
      "name": "Html",
      "value": 90,
    },
    {
      "name": "CSS",
      "value": 70,
    },
    {
      "name": "SASS",
      "value": 60,
    },
    {
      "name": "Bootstrap",
      "value": 90,
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

  colorScheme = 'nightLights';
  /* schemeType: string = 'linear'; */

  constructor() {}

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
