import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.css']
})
export class ChartJsComponent implements OnInit {
  chart = []
  constructor() { }

  ngOnInit(): void {
   var ctx = document.getElementById('myChart');
var myChart = new Chart("ctx", {
    type: 'line',
    data: {
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }

}
