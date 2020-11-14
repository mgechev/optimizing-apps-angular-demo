import { Component } from '@angular/core';

import { single, multi, barSingle, barMulti } from './chart.data';
import { ELEMENT_DATA } from './table.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  // Gauge
  single: any[] = [];
  gaugeView: [number, number] = [500, 400];
  gaugeLegend = true;
  legendPosition = 'below';

  gaugeColorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {
    Object.assign(this, { single, multi });
    Object.assign(this, { barSingle, barMulti });
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // Line chart
  multi: any[] = [];
  lineChartView: [number, number] = [1400, 300];

  // options
  lineChartLegend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  lineChartColorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  // Bar chart
  barSingle: any[] = [];
  barMulti: any[] = [];

  barView: [number, number] = [700, 400];

  // options
  barShowXAxis = true;
  barShowYAxis = true;
  barGradient = false;
  barShowLegend = true;
  barShowXAxisLabel = true;
  barXAxisLabel = 'Country';
  barShowYAxisLabel = true;
  barYAxisLabel = 'Population';

  barColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  get aggregate(): number {
    let total = 0;
    for (let i = 0; i < 15000; i++) {
      for (const el of ELEMENT_DATA) {
        total += Math.log(el.weight ** 2);
      }
    }
    return total;
  }

  get popularLinks(): { text: string, href: string }[] {
    return ELEMENT_DATA.sort((a, b) => {
      return a.weight - b.weight;
    }).map((data) => ({
      href: `https://example.com/${data.name}`,
      text: data.name,
    }));
  }
}
