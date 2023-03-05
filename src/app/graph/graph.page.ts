import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { IonThumbnail } from '@ionic/angular';
import { NavigationHookResult } from '@ionic/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  Xn: number = 0;
  Xk: number = 0;
  a: number = 0;
  h: number = 0;
  xx: string[] = [];
  yy: string[] = [];
  data1: string[] = [];
  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit() {
  }
  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    });
  }
  graphCalc(Xn: string, Xk: string, a: string, h: string) {
    this.data1 = [];
    this.Xn = parseFloat(Xn);
    this.Xk = parseFloat(Xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number, y: number, i: number = 0;
    x = this.Xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x < this.Xk) {
      if (x <= 0) {
        y = Math.abs(Math.pow(((2 * x + 5) / (Math.pow(x, 3) + 2)), 1.0 / 3.0));
      }
      else if (x <= this.a) {
        y = Math.sqrt(Math.sin(x * x + 3) + 4) / (x * x + 2);
      }
      else {
        y = Math.sin(Math.pow(x + 2, 3)) / Math.log(Math.abs(x * x + 3 * x + 1));
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(y.toFixed(1));
      let s = "x= " + x.toFixed(1) + ", y= " + y.toFixed(1);
      this.data1.push(s);
      x += this.h;
    }
    this.lineChartMethod();
  }
}
